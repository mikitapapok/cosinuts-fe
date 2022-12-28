import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  PageTitles,
  ProductTypes,
  ProductTypesType,
} from '../../shared/constants/contstans';
import { Subscription, switchMap, tap } from 'rxjs';
import { ProductsService } from '../../shared/services/products.service';
import { IProducts, StoreSelectors } from '../../shared/interfaces/interfaces';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit, OnDestroy {
  title?: string;
  productList?: IProducts[];
  loading: boolean = false;
  productType?: Subscription;

  productsQuery?: Subscription;
  type: string = ProductTypes.DriedFruits;
  currentPage: number = 0;
  maxPage: number = 0;

  constructor(
    private productsService: ProductsService,
    private store: Store<{ productType: { productType: ProductTypesType } }>
  ) {
    this.title = PageTitles.Catalog;
  }
  getProductsObjFromQuery(newObj: { count: number; products: IProducts[] }) {
    this.maxPage = Math.ceil(newObj.count / 6);
    this.productList = newObj.products;

    this.loading = false;
  }
  ngOnInit() {
    this.productType = this.store
      .select(StoreSelectors.productType)
      .pipe(
        switchMap(({ productType }) => {
          this.loading = true;
          this.type = productType;
          this.currentPage = 0;
          return this.productsService.getProductsWithRefetch(
            this.type,
            this.currentPage
          );
        }),
        tap(newObj => {
          this.getProductsObjFromQuery(newObj);
        })
      )
      .subscribe();
  }
  getProductsFromCurrentPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.loading = true;
    this.productsQuery = this.productsService
      .getProductsWithRefetch(this.type, this.currentPage)
      .pipe(
        tap(newObj => {
          this.getProductsObjFromQuery(newObj);
        })
      )
      .subscribe();
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage -= 1;
      this.loading = true;
      this.productsQuery = this.productsService
        .getProductsWithRefetch(this.type, this.currentPage)
        .pipe(
          tap(newObj => {
            this.getProductsObjFromQuery(newObj);
          })
        )
        .subscribe();
    }
  }

  nextPage() {
    if (this.currentPage < this.maxPage) {
      this.loading = true;
      this.currentPage += 1;
      this.productsQuery = this.productsService
        .getProductsWithRefetch(this.type, this.currentPage)
        .pipe(
          tap(newObj => {
            this.getProductsObjFromQuery(newObj);
          })
        )
        .subscribe();
    }
  }

  ngOnDestroy() {
    this.productsQuery?.unsubscribe();
    this.productType?.unsubscribe();
  }
}
