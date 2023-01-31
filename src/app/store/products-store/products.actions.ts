import { createAction, props } from '@ngrx/store';
import { IProducts } from '../../shared/interfaces/interfaces';

export const addProductsAction = createAction(
  '[Categories] AddProducts',
  props<{ offset: number }>()
);

export const productsFromQueries = createAction(
  '[Effect] products from effect',
  props<{ count: number; products: IProducts[]; currentPage: number }>()
);

export const changeCurrentPage = createAction(
  '[Categories] change current page to 0'
);

export const runLoadingAction = createAction('[catalog] loading');
