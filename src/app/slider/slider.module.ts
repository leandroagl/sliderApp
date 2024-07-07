import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { IframeComponent } from './components/iframe/iframe.component';
import { SecureUrlPipe } from './pipes/secure-url.pipe';
import { UrlFormComponent } from './components/url-form/url-form.component';
import { DashboardListComponent } from './components/dashboard-list/dashboard-list.component';

@NgModule({
  declarations: [
    IframeComponent,
    SecureUrlPipe,
    UrlFormComponent,
    DashboardListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardListComponent,
    IframeComponent,
    UrlFormComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SliderModule { }
