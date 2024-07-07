import { Injectable, signal } from '@angular/core';
import { UrlDashboard } from '../interfaces/link-dashboard.interface';

@Injectable({
  providedIn: 'root'
})

export class SwiperSlideService {

  public sliderCacheStorage: UrlDashboard[] = [];
  public dashboardsList: UrlDashboard[] = [];

  constructor() {
    if( !localStorage.getItem('sliderAppCache') ) return;
    this.loadFromLocalStorage();
    // que pasa si lo que esta en el cache store es diferente?
  }

  private saveOnLocalStorage() {
    localStorage.setItem('sliderAppCache', JSON.stringify(this.sliderCacheStorage));
  }

  private loadFromLocalStorage() {
    this.sliderCacheStorage = JSON.parse(localStorage.getItem('sliderAppCache')!)
  }

  saveOnStorage(objectURL: UrlDashboard) {
    this.sliderCacheStorage.push(objectURL);
    this.saveOnLocalStorage()
  }

  deleteFromArray(index: number) {
    this.sliderCacheStorage.splice(index, 1);
    this.saveOnLocalStorage()
  }

}
