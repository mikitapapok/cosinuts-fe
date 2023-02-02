import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../shared/services/auth.service';
import { AppStateInterface } from '../../shared/interfaces/interfaces';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as authActions from './auth.actions';
import { catchError, from, map, mergeMap, of, switchMap } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppStateInterface>,
    private router: Router
  ) {}

  signUp$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.signupAction),
      switchMap(action =>
        this.authService.signUp(action.email, action.password).pipe(
          map(() => {
            this.router.navigate(['login']);
            return authActions.signUpAction({ email: action.email });
          }),
          catchError(error => {
            window.alert(error.message);
            return of(authActions.noOpAction());
          })
        )
      )
    );
  });
  signupWithBackend$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.signUpAction),
      switchMap(action =>
        this.authService.signUpWithBack(action.email).pipe(
          map(result => {
            window.localStorage.setItem('id', result);
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
      switchMap(action => {
        const id = window.localStorage.getItem('id');
        if (id) {
          return this.authService.verifyToken(action.token, id).pipe(
            map(result => {
              const currentUserInfo = JSON.parse(JSON.stringify(result));
              this.router.navigate(['catalog']);
              return authActions.addUserInfoAction({
                email: currentUserInfo.email,
                basket: currentUserInfo.products,
              });
            }),
            catchError(error => {
              window.alert(error.message);
              return of(authActions.noOpAction());
            })
          );
        }
        return of(authActions.noOpAction());
      })
    );
  });
}
