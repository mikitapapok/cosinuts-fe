import { productTypeReducer } from './product-type-store/product-type.reducer';
import { productsReducer } from './products-store/products.reducer';
import { userReducer } from './user-info-store/user-info.reducer';

export const combineReducer = {
  productType: productTypeReducer,
  products: productsReducer,
  user: userReducer,
};
