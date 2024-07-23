import { Component, inject, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderModule } from '../../../slider/slider.module';
import { MaterialModule } from '../../../material/material.module';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [ CommonModule, SliderModule, MaterialModule, RouterModule ],
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: '',
})
export class SidebarComponent {

  public touched = signal(false);

  markAsUntouched( status: boolean ) {
    this.touched.set(status);
  }

}
