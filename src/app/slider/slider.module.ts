import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IframeComponent } from './components/iframe/iframe.component';
import { SecureUrlPipe } from './pipes/secure-url.pipe';

@NgModule({
  declarations: [
    IframeComponent,
    SecureUrlPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    IframeComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SliderModule { }
