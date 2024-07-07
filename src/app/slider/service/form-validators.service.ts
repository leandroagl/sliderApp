import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorsService {

// Validations
public needIncludeMetabase =  (control: FormControl): ValidationErrors | null => {
  const value: string = control.value.trim().toLowerCase();
  if( !value.includes('https://metabase.ondra.com.ar') ) return { notIncludeMetabase: true };

  return null;
}

public isValidUrl( form: FormGroup, url: string ) {
  return form.controls[url].errors && form.controls[url].touched;
}

}
