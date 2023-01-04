import { Component, OnInit } from '@angular/core';
import { PageTitles, ProductTypes } from '../../shared/constants/contstans';
import { Observable, Subscription } from 'rxjs';
import { ProductsService } from '../../shared/services/products.service';
import {
  AppStateInterface,
  IProducts,
} from '../../shared/interfaces/interfaces';
import { select, Store } from '@ngrx/store';
import {
  maxPageSelector,
  productsSelector,
} from '../../store/products-store/products.reducer';
import { addProductsAction } from '../../store/products-store/products.actions';
import { productTypeSelector } from '../../store/product-type-store/product-type.reducer';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit {
  title?: string;
  productList?: Observable<IProducts[]>;
  loading: boolean = false;
  productType?: Subscription;

  productsQuery?: Subscription;
  type: string = ProductTypes.DriedFruits;
  currentPage: number = 0;
  maxPage: number = 0;
  constructor(
    private productsService: ProductsService,
    private store: Store<AppStateInterface>
  ) {
    this.title = PageTitles.Catalog;
  }
  ngOnInit() {
    this.productList = this.store.pipe(select(productsSelector));
    this.store.pipe(select(maxPageSelector));
    this.store.select(productTypeSelector).subscribe(() => {
      this.currentPage = 0;
    });
  }

  getProductsFromCurrentPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.store.dispatch(addProductsAction({ offset: pageNumber }));
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage -= 1;
      // this.loading = true;
      this.store.dispatch(addProductsAction({ offset: this.currentPage }));
    }
  }

  nextPage(maxPage: number) {
    if (this.currentPage < maxPage - 1) {
      this.currentPage += 1;
      // this.loading = true;

      this.store.dispatch(addProductsAction({ offset: this.currentPage }));
      // this.productList.pipe(tap(() => (this.loading = false)));
    }
  }
}
