import { Component, Input, OnInit } from '@angular/core';
import { NavLink } from './navlink';

@Component({
  selector: '[smartwork-navlink]',
  templateUrl: './navlink.component.html',
  styleUrls: ['./navlink.component.css']
})
export class NavlinkComponent implements OnInit {
  @Input() link: NavLink;
  hasSubmenu: boolean = false;
  submenuExpanded: boolean = false;

  toggleMenu() {
    this.submenuExpanded = !this.submenuExpanded;
  }

  onDropdownBlur() {
    console.log("Dropdown blur");
    if (this.hasSubmenu && this.submenuExpanded) {
      this.submenuExpanded = false;
    }
  }

  onKeydown(e) {
    console.log(e);
    switch(e.keyCode) {
      case 27:
        if (this.hasSubmenu && this.submenuExpanded) {
          this.submenuExpanded = false;
        };
        break;
      default:
        console.log(e.keyCode);
    }

  }

  ngOnInit() {
    if (this.link.submenu) {
      this.hasSubmenu = true;
    }
  }
}