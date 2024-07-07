import { Component, Input, inject } from '@angular/core';
import { SwiperSlideService } from '../../service/slider-view.service';
import { UrlDashboard } from '../../interfaces/link-dashboard.interface';

@Component({
  selector: 'slider-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styles: ``
})
export class DashboardListComponent {

  @Input()
  public dashboardsList: UrlDashboard[] = [];

  private _swiperSlideService = inject( SwiperSlideService )

  deleteDashboard( index: number ): void {
    this._swiperSlideService.deleteFromArray(index);
  }
}
