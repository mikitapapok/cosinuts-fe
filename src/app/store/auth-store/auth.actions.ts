import { createAction, props } from '@ngrx/store';
import { AuthInterface } from '../../shared/interfaces/interfaces';

export const signupAction = createAction(
  '[SignUp] signUp',
  props<{ email: string; password: string }>()
);

export const noOpAction = createAction('[Effect] NoopAction');

export const loginAction = createAction(
  '[Login] login',
  props<{ email: string; password: string }>()
);
