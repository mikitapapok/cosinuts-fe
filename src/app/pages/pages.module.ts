import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AboutComponent } from './about/about.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'catalog',
    children: [
      { path: '', component: CatalogComponent },
      { path: ':id', component: ProductComponent },
    ],
  },
  { path: 'contacts', component: ContactsComponent },
  { path: 'shops', component: ShopListComponent },
  { path: 'delivery', component: DeliveryComponent },
  {
    path: '**',
    redirectTo: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  },
];
@NgModule({
  declarations: [
    MainPageComponent,
    AboutComponent,
    CatalogComponent,
    ContactsComponent,
    ShopListComponent,
    DeliveryComponent,
    ProductComponent,
  ],
  imports: [CommonModule, RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule, MainPageComponent],
})
export class PagesModule {}
