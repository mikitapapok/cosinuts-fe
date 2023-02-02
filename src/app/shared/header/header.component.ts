import { Component, OnInit } from '@angular/core';
import { AppStateInterface, INavigation } from '../interfaces/interfaces';
import { navigationRoutes } from '../constants/contstans';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { basketSelector } from '../../store/auth-store/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  navigation?: INavigation[];
  basket?: Observable<any>;

  constructor(private store$: Store<AppStateInterface>) {
    this.navigation = navigationRoutes;
  }

  ngOnInit() {
    this.basket = this.store$
      .pipe(select(basketSelector))
      .pipe(map(a => JSON.parse(a)));
  }
}
