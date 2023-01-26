import { createAction, props } from '@ngrx/store';
import { BasketProduct } from '../../shared/interfaces/interfaces';

export const signupAction = createAction(
  '[SignUp] signUp',
  props<{ email: string; password: string }>()
);

export const noOpAction = createAction('[Effect] NoopAction');
export const loginAction = createAction(
  '[Login] loginAction',
  props<{ email: string; password: string }>()
);
export const verifyTokenAction = createAction(
  '[Effect] verifyToken',
  props<{ token: string }>()
);

export const signUpAction = createAction(
  '[Effect] signup',
  props<{ email: string }>()
);
export const startLoadingAction = createAction('[Effect] launch loading');
export const addUserInfoAction = createAction(
  '[Effect] add user info',
  props<{ email: string; basket: BasketProduct[] }>()
);
