import { Component, Input } from '@angular/core';
import { NavLink } from './navlink';

@Component({
  selector: 'smartwork-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() links: Array<NavLink> = [];
  
  menuExpanded: boolean = true;

  toggleNavigation() {
    this.menuExpanded = !this.menuExpanded;
  }
}
