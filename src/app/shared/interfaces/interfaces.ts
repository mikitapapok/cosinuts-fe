import { ProductTypesType } from '../constants/contstans';

export interface INavigation {
  path: string;
  title: string;
  exact: boolean;
}

export interface AuthInterface {
  email: string;
  password: string;
}

export interface ICategories {
  type: ProductTypesType;
  title: string;
}

export enum StoreSelectors {
  productType = 'productType',
}

export interface IProductOption {
  amount: number;
  size: number;
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  src: string;
  type: string;
  cost: number;
  salePrice: number;
  options: IProductOption[];
}

export interface IAllProduct {
  getAllProducts: IProduct[];
}

export interface IGetOneParticualProductQuery {
  getOneParticularProduct: IProduct;
}

export interface IGetProducts {
  getProducts: { count: number; products: IProduct[] };
}

export interface ProductStateInterface {
  count: number[];
  products: IProduct[];
  currentProduct: IProduct;
  currentPage: number;
  loading: boolean;
}

export interface IOption {
  size: number;
  amount: number;
}

export interface BasketProduct {
  id: string;
}

export interface IBasketItem {
  id: string;
  size?: number;
  amount: number;
}

export interface AuthStateInterface {
  email: string;
  basket: IBasketItem[];
  loading: boolean;
}

export interface AppStateInterface {
  productType: { productType: ProductTypesType };
  products: ProductStateInterface;
  auth: AuthStateInterface;
}

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}
