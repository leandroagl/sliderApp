import { Component, OnInit, effect, inject, signal } from '@angular/core';
import { SwiperSlideService } from '../../service/slider-view.service';
import { UrlDashboard } from '../../interfaces/link-dashboard.interface';

// Elementos necesarios para tener todas las opciones de la libreria
import { SwiperContainer } from 'swiper/element';
import { AutoplayOptions, SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';
register();


@Component({
  selector: 'slider-iframe',
  templateUrl: './iframe.component.html',
  styles: ``
})
export class IframeComponent implements OnInit {

  public swiperElement = signal<SwiperContainer | null>(null);

  public dashboardsList: UrlDashboard[] = [];

  public urlDashboard: string = '';

  private _swiperSlideService = inject( SwiperSlideService );

  ngOnInit(): void {

    this.swiperInit(true, {delay: 59000, disableOnInteraction: false});
    this.getCacheData();

  }

  getCacheData() {
   this.dashboardsList = this._swiperSlideService.sliderCacheStorage;
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
      autoplay: autoplay || options,
      navigation: {
        enabled: true
      },
      speed: 500,
      pagination: true,
      observer: true,
      lazyPreloadPrevNext: 0,
    }

    // Asigno las opciones al elemento construido
    Object.assign(swiperElementConstructor!, swiperOptions);
    // Seteo la señal tipandola
    this.swiperElement.set( swiperElementConstructor as SwiperContainer )
    // Inicializao el slider
    this.swiperElement()?.initialize();

  }



}
