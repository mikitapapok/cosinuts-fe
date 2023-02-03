import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppStateInterface, IProducts } from '../interfaces/interfaces';
import {
  addToBasketAction,
  pushBasketToBackAction,
} from '../../store/auth-store/auth.actions';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.html',
})
export class ProductItemComponent implements OnInit {
  @Input() product?: IProducts;
  sbj: Subject<string> = new Subject<string>();

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
      // this.sbj
      //   .pipe(switchMap(() => this.store$.pipe(select(basketSelector))))
      //   .subscribe(res => console.log(res));
      this.store$.dispatch(addToBasketAction({ id }));
      this.store$.dispatch(pushBasketToBackAction());
      // this.sbj.next(id);
    }
  }
}
