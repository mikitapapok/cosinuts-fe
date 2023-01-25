import { createReducer, on, State } from '@ngrx/store';
import {
  AppStateInterface,
  AuthStateInterface,
} from '../../shared/interfaces/interfaces';
import * as authActions from './auth.actions';
import { state } from '@angular/animations';

const initState: AuthStateInterface = {
  email: '',
  loading: false,
};
export const authReducer = createReducer(
  initState,
  on(authActions.noOpAction, (state): AuthStateInterface => {
    return state;
  }),
  on(
    authActions.startLoadingAction,
    (state): AuthStateInterface => ({ ...state, loading: true })
  ),
  on(authActions.addUserInfoAction, (state, { credentials }) => ({
    ...state,
    email: credentials,
    loading: false,
  }))
);
