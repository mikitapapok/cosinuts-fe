import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./main-page/main-page.component";
import {AboutComponent} from "./about/about.component";
import {CatalogComponent} from "./catalog/catalog.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {ShopListComponent} from "./shop-list/shop-list.component";


const routes: Routes=[
  {path: '' , component: MainPageComponent},
  {path: 'about', component: AboutComponent},
  {path:'catalog',component: CatalogComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'shops', component: ShopListComponent}
]
@NgModule({
  declarations:[MainPageComponent,AboutComponent,CatalogComponent, ContactsComponent,ShopListComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
         MainPageComponent  ]
})
export class PagesModule{}
