import { Action } from '@ngrx/store';
import { CHANGE_PRODUCT_TYPE } from '../action-types/action-types';
import { ProductTypesType } from '../../shared/constants/contstans';

export class ChangeProductType implements Action {
  readonly type = CHANGE_PRODUCT_TYPE;

  constructor(public payload: ProductTypesType) {}
}
