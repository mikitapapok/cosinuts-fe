import { createAction, props } from '@ngrx/store';

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
