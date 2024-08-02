import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'slider',
    loadChildren: () => import('./slider/slider.module').then( m => m.SliderModule )
  },
  {
    path: '**',
    redirectTo: 'slider'
  }
];

// useHash necesario para montar la SPA en githubPages
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
