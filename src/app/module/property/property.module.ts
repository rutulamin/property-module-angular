import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PropertyRoutingModule } from './property-routing.module';
import { PropertyComponent } from './property.component';
import { FilterPropertyComponent } from './filter-property/filter-property.component';
import { ListPropertyComponent } from './list-property/list-property.component';
import { RecentPropertyComponent } from './recent-property/recent-property.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    PropertyComponent,
    FilterPropertyComponent,
    ListPropertyComponent,
    RecentPropertyComponent
  ],
  imports: [
    PropertyRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    InfiniteScrollModule,
    FontAwesomeModule
  ],
})
export class PropertyModule { }
