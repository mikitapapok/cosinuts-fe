import { productTypeReducer } from './product-type-store/product-type.reducer';
import { productsReducer } from './products-store/products.reducer';

export const combineReducer = {
  productType: productTypeReducer,
  products: productsReducer,
};
