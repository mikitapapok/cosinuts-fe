import {
  ProductTypes,
  ProductTypesType,
} from '../../shared/constants/contstans';
import { changeTypeAction } from './product-type.actions';

import { createReducer, on } from '@ngrx/store';

interface State {
  productType: ProductTypesType;
}

const initState: State = { productType: ProductTypes.DriedFruits };
export interface AppState {
  productType: ProductTypesType;
}

export const productTypeReducer = createReducer(
  initState,
  on(changeTypeAction, (state, { productType }) => ({
    productType: productType,
  }))
);
