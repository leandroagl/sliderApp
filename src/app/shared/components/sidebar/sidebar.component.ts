import { Component, OnInit, signal } from '@angular/core';
import { SwiperSlideService } from '../../../slider/service/slider-view.service';
import { LinkDashboard } from '../../../slider/interfaces/link-dashboard.interface';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ''
})
export class SidebarComponent implements OnInit {

  public dashboardsList: LinkDashboard[] = [];

  constructor( private _swiperSlideService: SwiperSlideService ) {}

  ngOnInit(): void {
    if (!this.dashboardsList) return;
    this.dashboardsList = this._swiperSlideService.sliderCacheStorage!;
  }

  saveDashboardURL( dashboardURL: string ): void {
    if ( !dashboardURL.includes('https://metabase.ondra.com.ar') ) return alert('Invalid URL');

    const url: LinkDashboard = { link: `${dashboardURL}#theme=night&refresh=60` }
    this._swiperSlideService.addToArray(url)
  }

  deleteDashboard( index: number ): void {
    this._swiperSlideService.deleteFromArray(index)
  }

}
