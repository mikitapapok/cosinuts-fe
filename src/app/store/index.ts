import { productTypeReducer } from './product-type-store/product-type.reducer';
import { productsReducer } from './products-store/products.reducer';
import { authReducer } from './auth-store/auth.reducer';

export const combineReducer = {
  productType: productTypeReducer,
  products: productsReducer,
  auth: authReducer,
};
