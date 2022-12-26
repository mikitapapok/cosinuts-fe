import {
  ProductTypes,
  ProductTypesType,
} from '../../shared/constants/contstans';
import { ChangeProductType } from './product-type.actions';
import { CHANGE_PRODUCT_TYPE } from '../action-types/action-types';

interface State {
  productType: ProductTypesType;
}

const initState: State = { productType: ProductTypes.DriedFruits };

export function productTypeReducer<State, Action>(
  state = initState,
  action: ChangeProductType
) {
  switch (action.type) {
    case CHANGE_PRODUCT_TYPE:
      return { ...state, productType: action.payload };
    default:
      return state;
  }
}
