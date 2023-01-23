import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../shared/services/auth.service';
import { AppStateInterface } from '../../shared/interfaces/interfaces';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import * as authActions from './auth.actions';
import { catchError, map, of, switchMap } from 'rxjs';

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

  // login$ = createEffect(() => {
  //
  // });
}
