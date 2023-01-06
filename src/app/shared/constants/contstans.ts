import { INavigation } from '../interfaces/interfaces';

export const navigationRoutes: INavigation[] = [
  { path: '/', title: 'Главная', exact: true },
  { path: 'catalog', title: 'Каталог', exact: false },
  { path: 'about', title: 'О нас', exact: false },
  { path: 'delivery', title: 'О доставке', exact: false },
  { path: 'shops', title: 'Магазины', exact: false },
  { path: 'contacts', title: 'Контакты', exact: false },
];
