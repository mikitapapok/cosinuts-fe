import { ProductTypesType } from '../constants/contstans';

export interface INavigation {
  path: string;
  title: string;
  exact: boolean;
}

export interface ICategories {
  type: ProductTypesType;
  title: string;
}

export enum StoreSelectors {
  productType = 'productType',
}

export interface IProducts {
  id: any;
  title: string;
  description: string;
  src: string;
  type: string;
  cost: number;
  salePrice: number;
}

export interface IAllProduct {
  getAllProducts: IProducts[];
}
export interface IGetProducts {
  getProducts: { count: number; products: IProducts[] };
}
export interface ProductStateInterface {
  count: number[];
  products: IProducts[];
  currentPage: number;
  loading: boolean;
}
export interface AppStateInterface {
  productType: { productType: ProductTypesType };
  products: ProductStateInterface;
}
