import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutePath } from './constants/constants';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./module/property/property.module').then(m => m.PropertyModule)
  },
  {
    path: RoutePath.ADD_PROPERTY,
    loadChildren: () => import('./module/add-property/add-property.module').then(m => m.AddPropertyModule)
  },
  {
    path: RoutePath.PROPERTY_DETAIL,
    loadChildren: () => import('./module/property-detail/property-detail.module').then(m => m.PropertyDetailModule)
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
