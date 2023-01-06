import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination-nav',
  templateUrl: './pagination-nav.component.html',
})
export class PaginationNavComponent implements OnInit {
  @Input() amountOfPage?: number;
  @Input() currentPage?: number;
  @Output() pageChanges = new EventEmitter<number>();
  @Output() onPrevPage = new EventEmitter<void>();
  @Output() onNextPage = new EventEmitter<void>();
  pages: number[] = [];
  ngOnInit() {
    this.pages = new Array(this.amountOfPage);
    console.log(this.amountOfPage);
  }

  onChangePage(page: number) {
    this.pageChanges.emit(page);
  }

  prevPageHandler() {
    this.onPrevPage.emit();
  }
  nextPageHandler() {
    this.onNextPage.emit();
  }
}
