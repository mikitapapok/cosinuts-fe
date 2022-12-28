import { Component, Input } from '@angular/core';
import { IProducts } from '../interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.html',
})
export class ProductItemComponent {
  @Input() product?: IProducts;
  constructor(private router: Router) {}
  goToProductPageHandler(id: string) {
    this.router.navigate(['/catalog', id]);
  }
}
