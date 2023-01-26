import {
  AppStateInterface,
  AuthStateInterface,
} from '../../shared/interfaces/interfaces';
import { createSelector } from '@ngrx/store';

export const authFeature = (state: AppStateInterface) => state.auth;

export const selectAuthSelector = createSelector(
  authFeature,
  (state: AuthStateInterface) => state.email
);

export const loadingSelector = createSelector(
  authFeature,
  (state: AuthStateInterface) => state.loading
);

export const basketSelector = createSelector(
  authFeature,
  (state: AuthStateInterface) => state.basket
);
