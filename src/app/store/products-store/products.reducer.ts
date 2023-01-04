import {
  AppStateInterface,
  ProductStateInterface,
} from '../../shared/interfaces/interfaces';
import { createReducer, createSelector, on } from '@ngrx/store';
import * as productActions from './products.actions';
import { count } from 'rxjs';

const initState: ProductStateInterface = {
  count: [],
  products: [],
  currentPage: 0,
};

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
export const productsReducer = createReducer(
  initState,
  on(
    productActions.productsFromQueries,
    (state, { count, products, currentPage }) => ({
      ...state,
      count: new Array(Math.ceil(count / 6)),
      products: products,
      currentPage: currentPage,
    })
  ),
  on(productActions.changeCurrentPage, state => ({ ...state, currentPage: 0 }))
);
