import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppStateInterface } from '../interfaces/interfaces';
import { map, Observable, switchMap } from 'rxjs';
import {
  currentPageSelector,
  maxPageSelector,
} from '../../store/products-store/products.reducer';

@Component({
  selector: 'app-pagination-nav',
  templateUrl: './pagination-nav.component.html',
})
export class PaginationNavComponent implements OnInit {
  @Output() pageChanges = new EventEmitter<number>();
  @Output() showPrevPage = new EventEmitter<void>();
  @Output() showNextPage = new EventEmitter<any>();
  pages?: Observable<any>;
  currentPage?: Observable<number>;
  ngOnInit() {
    this.pages = this.store.pipe(
      select(maxPageSelector),
      map(arr => {
        const newArr = [];
        for (let i = 0; i < arr.length; i++) {
          newArr.push(i);
        }
        return newArr;
      })
    );
    this.currentPage = this.store.pipe(select(currentPageSelector));
  }

  onChangePage(page: number) {
    this.pageChanges.emit(page);
  }

  prevPageHandler() {
    this.showPrevPage.emit();
  }
  nextPageHandler(maxPage: any) {
    console.log(maxPage);
    this.showNextPage.emit(maxPage);
  }
  constructor(private store: Store<AppStateInterface>) {}
}
