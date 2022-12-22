import { Component } from '@angular/core';
import { PageTitles } from '../../shared/constants/contstans';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent {
  title?: string;

  constructor() {
    this.title = PageTitles.Catalog;
  }
}
