import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SliderModule } from '../slider/slider.module';

@NgModule({
  declarations: [
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    SliderModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
