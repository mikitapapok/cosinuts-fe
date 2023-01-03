import { createAction, props } from '@ngrx/store';
import { IProducts } from '../../shared/interfaces/interfaces';

export const addProductsAction = createAction(
  '[Categories] AddProducts',
  props<{ count: number; products: IProducts[] }>()
);
