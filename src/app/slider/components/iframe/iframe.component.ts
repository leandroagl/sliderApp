import { Component, OnChanges, OnInit, SimpleChanges, inject, input, signal } from '@angular/core';
import { SwiperSlideService } from '../../service/slider-view.service';

// Elementos necesarios para tener todas las opciones de la libreria
import { SwiperContainer } from 'swiper/element';
import { AutoplayOptions, SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';
import { delay } from 'rxjs';
register();

@Component({
  selector: 'slider-iframe',
  templateUrl: './iframe.component.html',
  styles: ``
})
export class IframeComponent implements OnInit {

  private _swiperSlideService = inject( SwiperSlideService );
  public  swiperElement       = signal<SwiperContainer | null>(null);
  public  dashboardsList      = this.getCacheData();


  ngOnInit(): void {
    this.swiperInit(true, {delay: 59000, disableOnInteraction: false});
  }


  getCacheData() {
    return this._swiperSlideService.computedSlideCache();
  }

  swiperInit( autoplay?: boolean, options?: AutoplayOptions ) {

    // Construyo a partir de la etiqueta
    const swiperElementConstructor = document.querySelector('swiper-container');

    // Seteo Opciones
    const swiperOptions: SwiperOptions = {
      effect: 'fade',
      slidesPerView: 1,
      keyboard: {
        enabled: true,
        onlyInViewport: false
      },
      slidesPerGroup: 1,
      autoplay: {
        delay: 59000,
        disableOnInteraction: false
      },
      navigation: {
        enabled: true
      },
      speed: 1000,
      pagination: true,
      observer: true,
      lazyPreloadPrevNext: 1,
      lazyPreloaderClass: 'swiper-lazy-preloader',

    }

    // Asigno las opciones al elemento construido
    Object.assign(swiperElementConstructor!, swiperOptions);
    // Seteo la señal tipandola
    this.swiperElement.set( swiperElementConstructor as SwiperContainer )
    // Inicializao el slider
    this.swiperElement()?.initialize();
  }

}
