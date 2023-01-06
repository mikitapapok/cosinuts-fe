import { ProductStateInterface } from '../../shared/interfaces/interfaces';
import { createReducer, on } from '@ngrx/store';
import * as productActions from './products.actions';

const initState: ProductStateInterface = {
  count: [],
  products: [],
  currentPage: 0,
  loading: false,
};

export const productsReducer = createReducer(
  initState,
  on(
    productActions.productsFromQueries,
    (state, { count, products, currentPage }) => ({
      ...state,
      count: new Array(Math.ceil(count / 6)),
      products: products,
      currentPage: currentPage,
      loading: false,
    })
  ),
  on(productActions.changeCurrentPage, state => ({ ...state, currentPage: 0 })),
  on(productActions.runLoadingAction, state => ({ ...state, loading: true }))
);
