import { createAction, props } from '@ngrx/store';
import { IProducts } from '../../shared/interfaces/interfaces';
import { ProductTypesType } from '../../shared/constants/contstans';

export const addProductsAction = createAction(
  '[Categories] AddProducts',
  props<{ offset: number }>()
);

export const productsFromQueries = createAction(
  '[Effect] products from effect',
  props<{ count: number; products: IProducts[]; currentPage: number }>()
);

export const changeCurrentPage = createAction(
  '[categories] change current page to 0'
);
