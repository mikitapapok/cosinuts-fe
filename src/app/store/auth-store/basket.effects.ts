import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from '../../shared/interfaces/interfaces';
import { Router } from '@angular/router';
import * as authActions from './auth.actions';
import { of, switchMap, withLatestFrom } from 'rxjs';
import { selectAuthSelector } from './auth.selectors';

@Injectable()
export class BasketEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<AppStateInterface>,
    private router: Router
  ) {}

  checkStatus$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.addToBasketAction),
      withLatestFrom(this.store$.pipe(select(selectAuthSelector))),
      switchMap(([action, userEmail]) => {
        if (!userEmail) {
          this.router.navigate(['signup']);
          return of(authActions.noOpAction());
        }
        return of(authActions.addProductIdAction({ id: action.id }));
      })
    );
  });
}
