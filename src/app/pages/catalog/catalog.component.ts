import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageTitles } from '../../shared/constants/contstans';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../shared/services/products.service';
import { IProducts } from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit, OnDestroy {
  title?: string;
  productList?: IProducts[];
  getProducts?: Subscription;
  constructor(private productsService: ProductsService) {
    this.title = PageTitles.Catalog;
  }

  ngOnInit() {
    this.getProducts = this.productsService.fetchProducts().subscribe(value => {
      this.productList = value.data?.getAllProducts;
    });
    console.log(this.productList);
  }

  ngOnDestroy() {
    this.getProducts?.unsubscribe();
  }
}
