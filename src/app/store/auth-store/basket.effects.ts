import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from '../../shared/interfaces/interfaces';
import { Router } from '@angular/router';
import * as authActions from './auth.actions';
import {
  catchError,
  debounceTime,
  map,
  of,
  switchMap,
  withLatestFrom,
} from 'rxjs';
import { selectAuthSelector, userBasketSelector } from './auth.selectors';
import { ProductsService } from '../../shared/services/products.service';

@Injectable()
export class BasketEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<AppStateInterface>,
    private router: Router,
    private productService: ProductsService
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

  pushBasket = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.pushBasketToBackAction),
      withLatestFrom(this.store$.pipe(select(userBasketSelector))),
      debounceTime(4000),
      switchMap(([_, userInfo]) => {
        return this.productService
          .updateUser(userInfo.basket, userInfo.email)
          .pipe(
            map(() => authActions.noOpAction()),
            catchError(() => of(authActions.noOpAction()))
          );
      })
    );
  });
}
