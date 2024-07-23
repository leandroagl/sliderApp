import { Component, inject } from '@angular/core';
import { SwiperSlideService } from '../../service/slider-view.service';
import { UrlDashboard } from '../../interfaces/link-dashboard.interface';

@Component({
  selector: 'slider-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styles: ``
})
export class DashboardListComponent {

  private _swiperSlideService = inject( SwiperSlideService )

  public dashboardsList = this._swiperSlideService.computedSlideCache


  deleteDashboard( index: number, dashboard: UrlDashboard ): void {
    this._swiperSlideService.deleteFromArray(index, dashboard);
  }
}
