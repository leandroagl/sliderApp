import { Injectable } from '@angular/core';
import { UrlDashboard } from '../interfaces/link-dashboard.interface';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class SwiperSlideService {

  public sliderCacheStorage: UrlDashboard[] = [];
  public dashboardsList: UrlDashboard[] = [];


  // Validations
  public needIncludeMetabase =  (control: FormControl): ValidationErrors | null => {
    const value: string = control.value.trim().toLowerCase();
    if( !value.includes('https://metabase.ondra.com.ar') ) return { notIncludeMetabase: true };

    return null;
  }

  public isValidUrl( form: FormGroup, url: string ) {
    return form.controls[url].errors && form.controls[url].touched;
  }

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

  addToArray(objectURL: UrlDashboard) {
    this.sliderCacheStorage.push(objectURL);
    this.saveOnLocalStorage()
  }

  deleteFromArray(index: number) {
    this.sliderCacheStorage.splice(index, 1);
    this.saveOnLocalStorage()
  }

}
