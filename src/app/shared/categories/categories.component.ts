import { Component } from '@angular/core';
import { categoriesList, PageTitles } from '../constants/contstans';
import { ICategories } from '../interfaces/interfaces';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.components.html',
})
export class CategoriesComponent {
  title?: string;
  categoriesList?: ICategories[];
  constructor() {
    this.title = PageTitles.Categories;
    this.categoriesList = categoriesList;
  }
}
