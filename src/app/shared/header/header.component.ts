import { Component } from '@angular/core';
import { INavigation } from '../interfaces/interfaces';
import { navigationRoutes } from '../constants/contstans';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  count: number = 0;
  navigation?: INavigation[];

  constructor() {
    this.navigation = navigationRoutes;
  }
}
