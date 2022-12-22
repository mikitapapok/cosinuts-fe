export interface INavigation {
  path: string;
  title: string;
  exact: boolean;
}

export interface ICategories {
  type: string;
  title: string;
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
