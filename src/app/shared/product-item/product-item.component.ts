import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IProduct } from '../interfaces/interfaces';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.html',
})
export class ProductItemComponent implements OnInit {
  @Input() product?: IProduct;

  products: string[] = [];

  constructor(private router: Router) {}

  ngOnInit() {}

  goToProductPageHandler(id?: string) {
    this.router.navigate(['/catalog', id]);
  }
}
