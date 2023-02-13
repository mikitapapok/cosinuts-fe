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

  constructor(private store$: Store<AppStateInterface>) {}

  addToBasketHandler() {
    if (this.currentId) {
      this.store$.dispatch(addToBasketAction({ id: this.currentId }));
      this.store$.dispatch(pushBasketToBackAction());
    }
  }
}
