import { Component, Input } from '@angular/core';
import { IProducts } from '../interfaces/interfaces';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.html',
})
export class ProductItemComponent {
  @Input() product?: IProducts;
}
