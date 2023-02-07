import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppStateInterface, IProducts } from '../interfaces/interfaces';
import {
  addToBasketAction,
  pushBasketToBackAction,
} from '../../store/auth-store/auth.actions';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.html',
})
export class ProductItemComponent implements OnInit {
  @Input() product?: IProducts;

  products: string[] = [];

  constructor(
    private router: Router,
    private store$: Store<AppStateInterface>
  ) {}

  ngOnInit() {}

  goToProductPageHandler(id?: string) {
    this.router.navigate(['/catalog', id]);
  }

  addToBasketHandler(id?: string) {
    if (id) {
      this.store$.dispatch(addToBasketAction({ id }));
      this.store$.dispatch(pushBasketToBackAction());
    }
  }
}
