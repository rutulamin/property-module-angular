import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddPropertyRoutingModule } from './add-property-routing.module';
import { AddPropertyComponent } from './add-property.component';

@NgModule({
  declarations: [
    AddPropertyComponent
  ],
  imports: [
    AddPropertyRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
})
export class AddPropertyModule { }
