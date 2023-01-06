import { ICategories, INavigation } from '../interfaces/interfaces';

export const navigationRoutes: INavigation[] = [
  { path: '/', title: 'Главная', exact: true },
  { path: 'catalog', title: 'Каталог', exact: false },
  { path: 'about', title: 'О нас', exact: false },
  { path: 'delivery', title: 'О доставке', exact: false },
  { path: 'shops', title: 'Магазины', exact: false },
  { path: 'contacts', title: 'Контакты', exact: false },
];

export enum PageTitles {
  Catalog = 'Наш ассортимент',
  Categories = 'Категории',
}

export enum ProductTypes {
  DriedFruits = 'driedFruits',
  DriedBerries = 'driedBerries',
  CandiedFruits = 'candiedFruits',
  EasternSweets = 'easternSweets',
  Snacks = 'snacks',
  Grocery = 'grocery',
  SeedsAndBeans = 'seedsAndBeans',
}

export type ProductTypesType =
  | ProductTypes.DriedFruits
  | ProductTypes.DriedBerries
  | ProductTypes.CandiedFruits
  | ProductTypes.EasternSweets
  | ProductTypes.Grocery
  | ProductTypes.Snacks
  | ProductTypes.SeedsAndBeans;
export const categoriesList: ICategories[] = [
  { type: ProductTypes.DriedFruits, title: 'Сухофрукты' },
  { type: ProductTypes.DriedBerries, title: 'Ягоды сушеные' },
  { type: ProductTypes.CandiedFruits, title: 'Цукаты' },
  { type: ProductTypes.EasternSweets, title: 'Восточные сладости' },
  { type: ProductTypes.Snacks, title: 'Снеки' },
  { type: ProductTypes.Grocery, title: 'Бакалея' },
  { type: ProductTypes.SeedsAndBeans, title: 'Семена и бобовые' },
];
