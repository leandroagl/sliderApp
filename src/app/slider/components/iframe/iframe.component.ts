import { Component, OnInit } from '@angular/core';
import { SliderViewService } from '../../service/slider-view.service';
import { LinkDashboard } from '../../interfaces/link-dashboard.interface';

@Component({
  selector: 'slider-iframe',
  templateUrl: './iframe.component.html',
  styles: ``
})
export class IframeComponent implements OnInit {

  public linkList: LinkDashboard[] = [];

  public urlDashboard: string = '';

  constructor(
    private sliderViewService: SliderViewService,
  ) {}

  ngOnInit(): void {
    this.linkList = this.sliderViewService.cacheStore;
  }



}
