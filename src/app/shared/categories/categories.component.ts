import { Component, OnInit } from '@angular/core';
import {
  categoriesList,
  PageTitles,
  ProductTypesType,
} from '../constants/contstans';
import { AppStateInterface, ICategories } from '../interfaces/interfaces';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changeTypeAction } from '../../store/product-type-store/product-type.actions';
import { productTypeSelector } from '../../store/product-type-store/product-type.reducer';
import {
  addProductsAction,
  runLoadingAction,
} from '../../store/products-store/products.actions';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.components.html',
})
export class CategoriesComponent implements OnInit {
  title?: string;
  categoriesList?: ICategories[];
  productTypeSubscription?: Observable<string>;
  productType?: ProductTypesType;

  constructor(private store: Store<AppStateInterface>) {
    this.title = PageTitles.Categories;
    this.categoriesList = categoriesList;
  }
  ngOnInit() {
    this.productTypeSubscription = this.store.pipe(select(productTypeSelector));
    this.store.dispatch(addProductsAction({ offset: 0 }));
  }

  changeProductType(typeOfProduct: ProductTypesType): void {
    this.productType = typeOfProduct;
    this.store.dispatch(runLoadingAction());
    this.store.dispatch(changeTypeAction({ productType: typeOfProduct }));
    this.store.dispatch(addProductsAction({ offset: 0 }));
  }
}
