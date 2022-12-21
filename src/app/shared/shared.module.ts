import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { NgForOf } from '@angular/common';

@NgModule({
  exports: [HeaderComponent, FooterComponent],
  imports: [RouterLinkWithHref, RouterLinkActive, NgForOf],
  declarations: [HeaderComponent, FooterComponent],
})
export class SharedModule {}
