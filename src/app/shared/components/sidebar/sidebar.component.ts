import { Component, OnInit, inject, signal } from '@angular/core';
import { SwiperSlideService } from '../../../slider/service/slider-view.service';
import { UrlDashboard } from '../../../slider/interfaces/link-dashboard.interface';
import { CommonModule } from '@angular/common';
import { SliderModule } from '../../../slider/slider.module';

@Component({
  standalone: true,
  imports: [ CommonModule, SliderModule, ],
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ''
})
export class SidebarComponent implements OnInit {

  public dashboardsList: UrlDashboard[] = [];

  public touched = signal(false)

  private _swiperSlideService = inject( SwiperSlideService )

  ngOnInit(): void {
    if (!this.dashboardsList) return;
    this.dashboardsList = this._swiperSlideService.sliderCacheStorage!;
  }

  markAsUntouched( status: boolean ) {
    this.touched.set(status);
  }



}
