import { IProducts } from '../../shared/interfaces/interfaces';
import { createReducer, on } from '@ngrx/store';
import { addProductsAction } from './products.actions';
import { count } from 'rxjs';

interface State {
  count: number;
  products?: IProducts[];
}

const initState: State = {
  count: 0,
  products: [],
};

export const productsReducer = createReducer(
  initState,
  on(addProductsAction, (state, { count, products }) => ({
    count: count,
    products: products,
  }))
);
