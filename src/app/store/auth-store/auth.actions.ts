import { createAction, props } from '@ngrx/store';
import { IBasketItem } from '../../shared/interfaces/interfaces';

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
  props<{ token: string; email: string }>()
);

export const signupWithBackAction = createAction(
  '[effect] signup with backend',
  props<{ email: string }>()
);
export const startLoadingAction = createAction('[Effect] launch loading');
export const stopLoadingAction = createAction('[Effect]stop loading action');
export const addUserInfoAction = createAction(
  '[Effect] add user info',
  props<{ email: string; basket: IBasketItem[] }>()
);

export const addToBasketAction = createAction(
  '[Catalog] addToBasket',
  props<{ id: string; size: number }>()
);
export const addProductIdAction = createAction(
  '[Effect] add products id into the basket',
  props<{ id?: string; size?: number }>()
);
export const addProductInfoToBasket = createAction(
  '[Effect] add product info to basket',
  props<{ id: string; size: number; amount: number }>()
);
export const pushBasketToBackAction = createAction(
  '[ProductItem] push basket to backend'
);

export const synchronizeData = createAction(
  '[Effect] syncronize data',
  props<{ email: string; products: string[] }>()
);
