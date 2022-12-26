import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageTitles, ProductTypesType } from '../../shared/constants/contstans';
import { Subscription } from 'rxjs';
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
  getProducts?: Subscription;
  loading: boolean = false;
  productType?: Subscription;

  constructor(
    private productsService: ProductsService,
    private store: Store<{ productType: { productType: ProductTypesType } }>
  ) {
    this.title = PageTitles.Catalog;
  }

  ngOnInit() {
    this.loading = true;
    this.getProducts = this.productsService.fetchProducts().subscribe(value => {
      this.productList = value.data?.getAllProducts;
      this.loading = false;
    });
    this.productType = this.store
      .select(StoreSelectors.productType)
      .subscribe(({ productType }) => {
        console.log(productType);
      });
  }

  ngOnDestroy() {
    this.getProducts?.unsubscribe();
    this.productType?.unsubscribe();
  }
}
