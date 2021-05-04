import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { UIOptionsComponent } from './uioptions/uioptions.component';
import { PrefsEditorPanelComponent } from './prefs-editor-panel/prefs-editor-panel.component';
import { TextfieldStepperComponent } from './textfield-stepper/textfield-stepper.component';
import { SwitchComponent } from './switch/switch.component';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslationService } from '../../services/translation.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    UIOptionsComponent,
    PrefsEditorPanelComponent,
    TextfieldStepperComponent,
    SwitchComponent,
    ThemePickerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  exports: [
    UIOptionsComponent
  ],
  providers: [ 
    CookieService,
    TranslationService
  ],
  bootstrap: [
    UIOptionsComponent
  ]
})
export class UIOptionsModule { }
