import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { NgForOf } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { PageTitleComponent } from './page-title/page-title.component';

@NgModule({
  exports: [
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    PageTitleComponent,
  ],
  imports: [RouterLinkWithHref, RouterLinkActive, NgForOf],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    PageTitleComponent,
  ],
})
export class SharedModule {}
