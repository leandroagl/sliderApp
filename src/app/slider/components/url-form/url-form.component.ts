import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { SwiperSlideService } from '../../service/slider-view.service';
import { UrlDashboard } from '../../interfaces/link-dashboard.interface';
import { FormValidatorsService } from '../../service/form-validators.service';

@Component({
  selector: 'slider-url-form',
  templateUrl: './url-form.component.html',
  styles: ``
})
export class UrlFormComponent implements OnChanges {

  private formBuilder = inject( FormBuilder )
  private _swiperSliderService = inject( SwiperSlideService )
  private _formValidatorsService = inject( FormValidatorsService )

  public urlForm: FormGroup = this.formBuilder.group({
    url: [ '', [Validators.required, this._formValidatorsService.needIncludeMetabase ] ]
  })

  @Input()
  public resetFormOnClose: boolean = false;

  ngOnChanges(): void {
    if( this.resetFormOnClose ) return this.urlForm.reset();
  }

  isValidUrl( url: string ) {
    return this._formValidatorsService.isValidUrl( this.urlForm, url );
  }

  saveDashboardURL() {
    if( this.urlForm.invalid ) return this.urlForm.markAllAsTouched();

    const formValue: UrlDashboard = this.urlForm.value;
    const urlDashboard: UrlDashboard = {url:`${formValue.url}#theme=night&refresh=60`}

    this._swiperSliderService.saveOnStorage(urlDashboard)

    this.urlForm.reset({
      url: ''
    });
  }


}
