import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PropertyDetailRoutingModule } from './property-detail-routing.module';
import { PropertyDetailComponent } from './property-detail.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    PropertyDetailComponent
  ],
  imports: [
    PropertyDetailRoutingModule,
    CarouselModule.forRoot(),
    FontAwesomeModule,
    CommonModule,
  ],
})
export class PropertyDetailModule { }
