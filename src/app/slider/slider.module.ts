import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { IframeComponent } from './components/iframe/iframe.component';
import { SecureUrlPipe } from './pipes/secure-url.pipe';
import { UrlFormComponent } from './components/url-form/url-form.component';

@NgModule({
  declarations: [
    IframeComponent,
    SecureUrlPipe,
    UrlFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    IframeComponent,
    UrlFormComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SliderModule { }
