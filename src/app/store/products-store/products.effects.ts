import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from '../../shared/services/products.service';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../shared/interfaces/interfaces';
import * as ProductActions from './products.actions';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { productTypeSelector } from '../product-type-store/product-type.selectors';

@Injectable()
export class ProductsEffect {
  loadProducts$ = createEffect(() => {
    return this.actions.pipe(
      ofType(ProductActions.addProductsAction),
      withLatestFrom(this.store.select(productTypeSelector)),
      switchMap(([currentPayload, productType]) =>
        this.productService
          .getProductsWithRefetch(productType, currentPayload.offset)
          .pipe(
            map(resp =>
              ProductActions.productsFromQueries({
                count: resp.count,
                products: resp.products,
                currentPage: currentPayload.offset,
              })
            )
          )
      )
    );
  });
  constructor(
    private actions: Actions,
    private productService: ProductsService,
    private store: Store<AppStateInterface>
  ) {}
}
