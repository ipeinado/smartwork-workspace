import { NgModule } from '@angular/core';

import { UIOptionsComponent } from './uioptions/uioptions.component';
import { PrefsEditorPanelComponent } from './prefs-editor-panel/prefs-editor-panel.component';
import { TextfieldStepperComponent } from './textfield-stepper/textfield-stepper.component';
import { SwitchComponent } from './switch/switch.component';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { CookieService } from 'ngx-cookie-service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    UIOptionsComponent,
    PrefsEditorPanelComponent,
    TextfieldStepperComponent,
    SwitchComponent,
    ThemePickerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UIOptionsComponent
  ],
  providers: [ 
    CookieService 
  ],
  bootstrap: [
    UIOptionsComponent
  ]
})
export class UIOptionsModule { }
