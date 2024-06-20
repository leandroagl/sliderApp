import { Component, OnInit } from '@angular/core';
import { SwiperSlideService } from '../../../slider/service/slider-view.service';
import { UrlDashboard } from '../../../slider/interfaces/link-dashboard.interface';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ''
})
export class SidebarComponent implements OnInit {

  public dashboardsList: UrlDashboard[] = [];

  public touched: boolean = false;

  constructor( private _swiperSlideService: SwiperSlideService ) {}

  ngOnInit(): void {
    if (!this.dashboardsList) return;
    this.dashboardsList = this._swiperSlideService.sliderCacheStorage!;
  }

  deleteDashboard( index: number ): void {
    this._swiperSlideService.deleteFromArray(index)
  }

  markAsUntouched(status: boolean) {
    this.touched = status;
  }



}
