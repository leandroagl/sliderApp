import { Component, OnInit, signal } from '@angular/core';
import { SwiperSlideService } from '../../service/slider-view.service';
import { UrlDashboard } from '../../interfaces/link-dashboard.interface';

// Elementos necesarios para tener todas las opciones de la libreria
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
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

  constructor(
    private _swiperSlideService: SwiperSlideService,
  ) {}

  ngOnInit(): void {
    // Construyo a partir de la etiqueta
    const swiperElementConstructor = document.querySelector('swiper-container');
    // Seteo Opciones
    const swiperOptions: SwiperOptions = {
      effect: 'cube',
      slidesPerView: 1,
      slidesPerGroup: 1,
      autoplay: {
        delay: 45000,
        disableOnInteraction: false,
      },
      navigation: {
        enabled: true
      },
      speed: 500,
      pagination: true
    }

    // Asigno las opciones al elemento construido
    Object.assign(swiperElementConstructor!, swiperOptions);
    // Seteo la señal tipandola
    this.swiperElement.set( swiperElementConstructor as SwiperContainer )
    // Inicializao el slider
    this.swiperElement()?.initialize();

    this.dashboardsList = this._swiperSlideService.sliderCacheStorage;

  }

}
