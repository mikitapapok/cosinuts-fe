import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ToFixedPipe } from './pipes/to-fixed.pipe';

@NgModule({
  exports: [
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    PageTitleComponent,
    ProductItemComponent,
    ToFixedPipe,
  ],
  imports: [RouterLinkWithHref, RouterLinkActive, NgForOf, NgIf],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    PageTitleComponent,
    ProductItemComponent,
    ToFixedPipe,
  ],
})
export class SharedModule {}
