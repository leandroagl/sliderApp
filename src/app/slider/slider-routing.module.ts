import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IframeComponent } from './components/iframe/iframe.component';

const routes: Routes = [
  {
    path: '',
    component: IframeComponent
  },
  {
    path: '**',
    redirectTo: 'slider'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SliderRoutingModule { }
