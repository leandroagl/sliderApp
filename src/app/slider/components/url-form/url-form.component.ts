import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { SwiperSlideService } from '../../service/slider-view.service';
import { UrlDashboard } from '../../interfaces/link-dashboard.interface';

@Component({
  selector: 'slider-url-form',
  templateUrl: './url-form.component.html',
  styles: ``
})
export class UrlFormComponent implements OnChanges {

  public urlForm: FormGroup = this.formBuilder.group({
    url: [ '', [Validators.required, this._swiperSliderService.needIncludeMetabase ] ]
  })

  @Input()
  public closeSidebar: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _swiperSliderService: SwiperSlideService
  ) {}

  ngOnChanges(): void {
    if( this.closeSidebar === true ) return this.urlForm.markAsUntouched();
  }


  isValidUrl( url: string ) {
    return this._swiperSliderService.isValidUrl( this.urlForm, url );
  }

  saveDashboardURL() {
    if( this.urlForm.invalid ) return this.urlForm.markAllAsTouched();

    const formValue: UrlDashboard = this.urlForm.value;
    const urlDashboard: UrlDashboard = {url:`${formValue.url}#theme=night&refresh=60`}

    this._swiperSliderService.addToArray(urlDashboard)

    this.urlForm.reset({
      url: ''
    });
    // this.urlForm.markAsUntouched()
  }


}
