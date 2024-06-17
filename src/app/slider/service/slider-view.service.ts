import { Injectable } from '@angular/core';
import { LinkDashboard } from '../interfaces/link-dashboard.interface';

@Injectable({
  providedIn: 'root'
})

export class SwiperSlideService {

  public sliderCacheStorage: LinkDashboard[] = [];
  public dashboardsList: LinkDashboard[] = [];

  constructor() {
    if( !localStorage.getItem('sliderAppCache') ) return;
    this.loadFromLocalStorage();
  }

  private saveOnLocalStorage() {
    localStorage.setItem('sliderAppCache', JSON.stringify(this.sliderCacheStorage));
  }

  private loadFromLocalStorage() {
    this.sliderCacheStorage = JSON.parse(localStorage.getItem('sliderAppCache')!)
  }

  addToArray(objectURL: LinkDashboard) {
    this.sliderCacheStorage.push(objectURL);
    this.saveOnLocalStorage()
  }

  deleteFromArray(index: number) {
    this.sliderCacheStorage.splice(index, 1);
    this.saveOnLocalStorage()
  }
}
