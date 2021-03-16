import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavlinkComponent } from './navlink.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NavlinkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
