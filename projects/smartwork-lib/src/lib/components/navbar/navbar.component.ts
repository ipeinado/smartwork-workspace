import { Component, Input } from '@angular/core';
import { IpcService } from '../../services/ipc.service';
import { NavLink } from './navlink';

import { CookieService } from 'ngx-cookie-service';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../services/translation.service';

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

  goToService(service: string): void {
    this._ipc.send('goToService', service);
  }

  openExternalUrl(url: string): void {
    this._ipc.send('openExternalUrl', url);
  }

  logout(): void {
    this._ipc.send('logout');
  }

  toggleNavigation() {
    this.menuExpanded = !this.menuExpanded;
  }
}
