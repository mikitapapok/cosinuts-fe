import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../shared/services/auth.service';
import { AppStateInterface } from '../../shared/interfaces/interfaces';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as authActions from './auth.actions';
import { catchError, from, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppStateInterface>,
    private router: Router,
    private http: HttpClient
  ) {}

  signUp$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.signupAction),
      switchMap(action =>
        this.authService.signUp(action.email, action.password).pipe(
          map(() => {
            this.router.navigate(['login']);
            return authActions.noOpAction();
          }),
          catchError(error => {
            window.alert(error.message);
            return of(authActions.noOpAction());
          })
        )
      )
    );
  });

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.loginAction),
      switchMap(action =>
        this.authService
          .login({
            email: action.email,
            password: action.password,
          })
          .pipe(
            mergeMap(credentials => {
              return credentials.user
                ? from(credentials.user.getIdToken(true))
                : from(new Promise((resolve, reject) => reject(false)));
            }),
            map(token => {
              if (token) {
                return authActions.verifyTokenAction({
                  token: JSON.stringify(token),
                });
              }
              return authActions.noOpAction();
            }),
            catchError(error => {
              window.alert(error.message);
              return of(authActions.noOpAction());
            })
          )
      )
    );
  });

  verifyTokenEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.verifyTokenAction),
      switchMap(action =>
        this.authService.verifyToken(action.token).pipe(
          map(result => {
            this.router.navigate(['catalog']);
            return authActions.addUserInfoAction({
              credentials: JSON.stringify(result),
            });
          }),
          catchError(error => {
            window.alert(error.message);
            return of(authActions.noOpAction());
          })
        )
      )
    );
  });
}
