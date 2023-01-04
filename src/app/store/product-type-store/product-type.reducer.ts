import {
  ProductTypes,
  ProductTypesType,
} from '../../shared/constants/contstans';
import { changeTypeAction } from './product-type.actions';

import { createReducer, createSelector, on } from '@ngrx/store';
import { AppStateInterface } from '../../shared/interfaces/interfaces';

interface State {
  productType: ProductTypesType;
}

const initState: State = { productType: ProductTypes.DriedFruits };
export interface AppState {
  productType: ProductTypesType;
}

export const productTypeFeature = (state: AppStateInterface) =>
  state.productType;

export const productTypeSelector = createSelector(
  productTypeFeature,
  (state: AppState) => state.productType
);
export const productTypeReducer = createReducer(
  initState,
  on(changeTypeAction, (state, { productType }) => ({
    productType: productType,
  }))
);
