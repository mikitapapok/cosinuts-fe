import { createAction, props } from '@ngrx/store';
import { IProduct } from '../../shared/interfaces/interfaces';

export const addProductsAction = createAction(
  '[Categories] AddProducts',
  props<{ offset: number }>()
);

export const productsFromQueries = createAction(
  '[Effect] products from effect',
  props<{ count: number; products: IProduct[]; currentPage: number }>()
);

export const changeCurrentPage = createAction(
  '[Categories] change current page to 0'
);
export const getProductAction = createAction(
  '[product-item] getOneProduct',
  props<{ id: string }>()
);
export const addProductToTheStoreAction = createAction(
  '[Effect] addProductToStore',
  props<{ product: IProduct }>()
);
export const runLoadingAction = createAction('[catalog] loading');
export const clearCurrentProductAction = createAction(
  '[product] clearCurrentProductInfo'
);
