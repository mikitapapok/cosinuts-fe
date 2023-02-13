import { ActionReducer, MetaReducer } from '@ngrx/store';
import { AppStateInterface } from '../shared/interfaces/interfaces';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageReducer(
  reducer: ActionReducer<AppStateInterface>
): ActionReducer<AppStateInterface> {
  return localStorageSync({
    keys: ['auth', 'products'],
    rehydrate: true,
  })(reducer);
}

export const metaReducers: Array<MetaReducer<AppStateInterface, any>> = [
  localStorageReducer,
];
