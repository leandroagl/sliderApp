import { Injectable } from '@angular/core';
import { LinkDashboard } from '../interfaces/link-dashboard.interface';

@Injectable({
  providedIn: 'root'
})

export class SliderViewService {

  public cacheStore: LinkDashboard[] = [];
  public dashboardsList: LinkDashboard[] = [];

  constructor() {
    this.loadFromLocalStorage();
    if( !this.cacheStore ) {
      this.createDashboardCache();
      this.dashboardsList = this.cacheStore
    }
  }

  private createDashboardCache() {
    localStorage.setItem('cacheStore', JSON.stringify(this.dashboardsList));
  }

  private saveOnLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage() {
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!)
  }

  addToArray(objectURL: LinkDashboard) {
    this.cacheStore.push(objectURL);
    this.saveOnLocalStorage()
  }

  deleteFromArray(index: number) {
    this.cacheStore.splice(index, 1);
    this.saveOnLocalStorage()
  }
}
