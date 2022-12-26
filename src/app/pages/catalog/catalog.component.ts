import {
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';
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
  type?: string;

  constructor(
    private productsService: ProductsService,
    private store: Store<{ productType: { productType: ProductTypesType } }>
  ) {
    this.title = PageTitles.Catalog;
  }

  ngOnInit() {
    this.productType = this.store
      .select(StoreSelectors.productType)
      .subscribe(({ productType }) => {
        this.loading = true;
        this.getProducts = this.productsService
          .fetchProductsByType(productType)
          .subscribe(value => {
            this.productList = value.data?.getProducts;
            this.loading = false;
          });
      });
  }

  ngOnDestroy() {
    this.getProducts?.unsubscribe();
    this.productType?.unsubscribe();
  }
}
