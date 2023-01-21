import { createReducer, on, State } from '@ngrx/store';
import {
  AppStateInterface,
  AuthStateInterface,
} from '../../shared/interfaces/interfaces';
import * as authActions from './auth.actions';
const initState: AuthStateInterface = {
  email: '',
};
export const authReducer = createReducer(
  initState,
  on(authActions.noOpAction, (state): AuthStateInterface => {
    return state;
  })
);
