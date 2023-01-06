import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { AsyncPipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ToFixedPipe } from './pipes/to-fixed.pipe';
import { SpinnerComponent } from './spinner/spinner.component';
import { PaginationNavComponent } from './pagination-nav/pagination-nav.component';

@NgModule({
  exports: [
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    PageTitleComponent,
    ProductItemComponent,
    ToFixedPipe,
    SpinnerComponent,
    PaginationNavComponent,
  ],
  imports: [
    RouterLinkWithHref,
    RouterLinkActive,
    NgForOf,
    NgIf,
    NgClass,
    AsyncPipe,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    PageTitleComponent,
    ProductItemComponent,
    ToFixedPipe,
    SpinnerComponent,
    PaginationNavComponent,
  ],
})
export class SharedModule {}
