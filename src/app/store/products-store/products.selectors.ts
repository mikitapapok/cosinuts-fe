import {
  AppStateInterface,
  ProductStateInterface,
} from '../../shared/interfaces/interfaces';
import { createSelector } from '@ngrx/store';

export const productsFeature = (state: AppStateInterface) => state.products;
export const productsSelector = createSelector(
  productsFeature,
  (state: ProductStateInterface) => state.products
);
export const currentPageSelector = createSelector(
  productsFeature,
  (state: ProductStateInterface) => state.currentPage
);
export const maxPageSelector = createSelector(
  productsFeature,
  (state: ProductStateInterface) => state.count
);

export const loadingSelector = createSelector(
  productsFeature,
  (state: ProductStateInterface) => state.loading
);
