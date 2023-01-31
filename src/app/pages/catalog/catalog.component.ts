import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageTitles, ProductTypes } from '../../shared/constants/contstans';
import { Observable, Subscription } from 'rxjs';
import { ProductsService } from '../../shared/services/products.service';
import {
  AppStateInterface,
  IProducts,
} from '../../shared/interfaces/interfaces';
import { Store } from '@ngrx/store';
import {
  loadingSelector,
  productsSelector,
} from '../../store/products-store/products.selectors';
import {
  addProductsAction,
  runLoadingAction,
} from '../../store/products-store/products.actions';
import { productTypeSelector } from '../../store/product-type-store/product-type.selectors';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit, OnDestroy {
  title?: string;
  productList$?: Observable<IProducts[]>;
  loading$?: Observable<boolean>;
  productType?: Subscription;

  type: string = ProductTypes.DriedFruits;
  currentPage: number = 0;
  constructor(
    private productsService: ProductsService,
    private store: Store<AppStateInterface>
  ) {
    this.title = PageTitles.Catalog;
  }
  ngOnInit() {
    this.productList$ = this.store.select(productsSelector);
    this.loading$ = this.store.select(loadingSelector);
    this.productType = this.store.select(productTypeSelector).subscribe(() => {
      this.currentPage = 0;
    });
  }

  getProductsFromCurrentPage(pageNumber: number) {
    this.store.dispatch(runLoadingAction());
    this.currentPage = pageNumber;
    this.store.dispatch(addProductsAction({ offset: pageNumber }));
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.store.dispatch(runLoadingAction());
      this.currentPage -= 1;
      this.store.dispatch(addProductsAction({ offset: this.currentPage }));
    }
  }

  nextPage(maxPage: number) {
    if (this.currentPage < maxPage - 1) {
      this.store.dispatch(runLoadingAction());
      this.currentPage += 1;
      this.store.dispatch(addProductsAction({ offset: this.currentPage }));
    }
  }

  ngOnDestroy() {
    this.productType?.unsubscribe();
  }
}
