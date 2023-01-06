import {createAction, props} from "@ngrx/store";
import {ProductTypesType} from "../../shared/constants/contstans";

export const changeTypeAction= createAction('[ Categories] ChangeProductType',
  props<{productType: ProductTypesType}>())

