import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  AppStateInterface,
  IProduct,
} from '../../shared/interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { currentProductSelector } from '../../store/products-store/products.selectors';
import {
  clearCurrentProductAction,
  getProductAction,
} from '../../store/products-store/products.actions';
import { ProductsService } from '../../shared/services/products.service';

import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit, OnDestroy, OnChanges {
  storeSubscription$?: Subscription;
  productFormGroup: FormGroup<any> = new FormGroup<any>({});
  productInfo$?: Observable<IProduct>;

  constructor(
    private store$: Store<AppStateInterface>,
    private productService: ProductsService,
    private router: ActivatedRoute
  ) {}

  ngOnChanges() {}

  ngOnInit() {
    this.productFormGroup = new FormGroup<any>({
      option: new FormControl(100),
    });
    this.storeSubscription$ = this.router.params
      .pipe(
        map(params => {
          const currentId = params['id'];
          this.store$.dispatch(getProductAction({ id: currentId }));
        })
      )
      .subscribe();

    this.productInfo$ = this.store$.pipe(select(currentProductSelector));
  }

  ngOnDestroy() {
    this.storeSubscription$?.unsubscribe();
    this.store$.dispatch(clearCurrentProductAction());
  }

  onSubmit() {
    console.log(this.productFormGroup.value);
  }
}
