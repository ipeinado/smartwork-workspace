import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslationService } from '../../services/translation.service';

import { IpcService } from '../../services/ipc.service';

// AoT requires an exported function for factories
export function HttpLoaderFactoryNavbar(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactoryNavbar,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  exports: [
    NavbarComponent,
    RouterModule
  ],
  providers: [
    IpcService
  ]
})
export class NavbarModule { }
