import { Component, OnInit } from '@angular/core';
import { SliderViewService } from '../../../slider/service/slider-view.service';
import { LinkDashboard } from '../../../slider/interfaces/link-dashboard.interface';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ''
})
export class SidebarComponent implements OnInit {

  public dashboardsList: LinkDashboard[] = [];

  constructor(private sliderViewService: SliderViewService) { }

  ngOnInit(): void {
    if (!this.dashboardsList) return;
    this.dashboardsList = this.sliderViewService.cacheStore!;
  }

  saveDashboardURL(dashboardURL: string) {
    if (dashboardURL.includes('https://metabase.ondra.com.ar')) {
      const url: LinkDashboard = { link: dashboardURL }
      this.sliderViewService.addToArray(url)
    } else {
      alert('Invalid URL');
      return;
    }
  }

  deleteDashboard(index: number) {
    this.sliderViewService.deleteFromArray(index)
  }

}
