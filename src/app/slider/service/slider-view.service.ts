import { computed, Injectable, signal } from '@angular/core';
import { UrlDashboard } from '../interfaces/link-dashboard.interface';

@Injectable({
  providedIn: 'root'
})

export class SwiperSlideService {
  #sliderCache = signal<UrlDashboard[]>([])

  public computedSlideCache = computed<UrlDashboard[]>( () => this.#sliderCache() );

  public restartSlider = signal<boolean>(false);

  constructor() {
    if( !localStorage.getItem('sliderAppCache') ) return;
    this.loadFromLocalStorage();
    // que pasa si lo que esta en el cache store es diferente?
  }

  private saveOnLocalStorage() {
    localStorage.setItem( 'sliderAppCache', JSON.stringify(this.#sliderCache()) );
  }

  private loadFromLocalStorage() {
    this.#sliderCache.set(JSON.parse(localStorage.getItem('sliderAppCache')!))
  }

  saveOnStorage(objectURL: UrlDashboard) {
    this.#sliderCache.update( value => [...value, objectURL ]);
    this.saveOnLocalStorage();
    this.loadFromLocalStorage();
  }

  deleteFromArray(index: number, dashboard: UrlDashboard) {
    const cacheArray = this.#sliderCache();

    cacheArray.splice( index, 1 )

    this.#sliderCache.update(() => cacheArray );


    this.saveOnLocalStorage();
    this.loadFromLocalStorage();
  }


}
