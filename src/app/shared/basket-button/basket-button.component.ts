import { Component, Input } from '@angular/core';
import {
  addToBasketAction,
  pushBasketToBackAction,
} from '../../store/auth-store/auth.actions';
import { AppStateInterface } from '../interfaces/interfaces';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-basket-button',
  templateUrl: 'basket-button.component.html',
})
export class BasketButtonComponent {
  @Input() currentId?: string;
  @Input() currentSize?: number;

  constructor(private store$: Store<AppStateInterface>) {}

  addToBasketHandler() {
    if (this.currentId && this.currentSize) {
      this.store$.dispatch(
        addToBasketAction({ id: this.currentId, size: this.currentSize })
      );
      this.store$.dispatch(pushBasketToBackAction());
    }
  }
}
