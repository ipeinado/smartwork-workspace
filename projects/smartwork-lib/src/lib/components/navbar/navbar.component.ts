import { Component, Input } from '@angular/core';
import { IpcService } from '../../services/ipc.service';
import { NavLink } from './navlink';

import { CookieService } from 'ngx-cookie-service';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'smartwork-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() username: string = "";
  
  menuExpanded: boolean = true;

  constructor(
    private _ipc: IpcService,
    private cookieService: CookieService,
    private translationService: TranslationService,
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en').subscribe(() => {
      this.translationService.init('en');
    });
  }

  goToService(e, service) {
    e.preventDefault();
    // console.log(service);
    this._ipc.send('goToService', service);
  }

  openExternalUrl(e, url): void {
    e.preventDefault();
    // console.log(url);
    this._ipc.send('openExternalUrl', url);
  }

  logout(e): void {
    e.preventDefault();
    this._ipc.send('logout');
  }

  toggleNavigation() {
    this.menuExpanded = !this.menuExpanded;
  }
}
