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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  { path: '', component: SignupComponent },
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
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: 'delivery', component: DeliveryComponent },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full',
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
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
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
  ],
  exports: [RouterModule, MainPageComponent],
})
export class PagesModule {}
