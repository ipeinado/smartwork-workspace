import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { NavlinkComponent } from './navlink.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NavlinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    RouterModule
  ]
})
export class NavbarModule { }
