import { Component, OnDestroy } from '@angular/core';
import {
  categoriesList,
  PageTitles,
  ProductTypesType,
} from '../constants/contstans';
import { ICategories } from '../interfaces/interfaces';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {changeTypeAction} from "../../store/product-type-store/product-type.actions";


@Component({
  selector: 'app-categories',
  templateUrl: './categories.components.html',
})
export class CategoriesComponent implements OnDestroy {
  title?: string;
  categoriesList?: ICategories[];
  productTypeSubscription?: Subscription;
  productType?: ProductTypesType;

  constructor(
    private store: Store<{ productType: { productType: ProductTypesType } }>
  ) {
    this.title = PageTitles.Categories;
    this.categoriesList = categoriesList;
    this.productTypeSubscription = this.store
      .select('productType')
      .subscribe(({ productType }) => (this.productType = productType));
  }

  productTypeCheck(typeOfProduct: ProductTypesType): boolean {
    return typeOfProduct === this.productType;
  }

  ngOnDestroy() {
    this.productTypeSubscription?.unsubscribe();
  }

  changeProductType(typeOfProduct: ProductTypesType): void {
    this.store.dispatch( changeTypeAction({productType: typeOfProduct}));
  }
}
