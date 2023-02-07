import { createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../../shared/interfaces/interfaces';
import * as authActions from './auth.actions';

const initState: AuthStateInterface = {
  email: '',
  basket: [],
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
  on(
    authActions.noOpAction,
    (state): AuthStateInterface => ({ ...state, loading: false })
  ),
  on(authActions.addUserInfoAction, (state, props) => {
    return {
      ...state,
      email: props.email,
      basket: props.basket,
      loading: false,
    };
  }),
  on(authActions.addProductIdAction, (state, { id }) => {
    if (id) {
      const newProductBasket = [...state.basket, id];

      return {
        ...state,
        basket: newProductBasket,
        loading: false,
      };
    }
    return {
      ...state,
      basket: [],
      loading: false,
    };
  })
);
