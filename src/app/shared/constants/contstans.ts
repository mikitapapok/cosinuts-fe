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

export const categoriesList: ICategories[] = [
  { type: 'driedFruits', title: 'Сухофрукты' },
  { type: 'driedBerries', title: 'Ягоды сушеные' },
  { type: 'CandiedFruits', title: 'Цукаты' },
  { type: 'easternSweets', title: 'Восточные сладости' },
  { type: ' snacks', title: 'Снеки' },
  { type: 'grocery', title: 'Бакалея' },
  { type: 'seedsAndBeans', title: 'Семена и бобовые' },
];
