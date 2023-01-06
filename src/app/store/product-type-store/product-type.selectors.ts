import { AppStateInterface } from '../../shared/interfaces/interfaces';
import { createSelector } from '@ngrx/store';
import { AppState } from './product-type.reducer';

export const productTypeFeature = (state: AppStateInterface) =>
  state.productType;

export const productTypeSelector = createSelector(
  productTypeFeature,
  (state: AppState) => state.productType
);
