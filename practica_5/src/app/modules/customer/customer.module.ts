import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './_components/customer/customer/customer.component';
import { CustomerImageComponent } from './_components/customer-image/customer-image.component';
import { RegionComponent } from './_components/region/region.component';



@NgModule({
  declarations: [
    CustomerComponent,
    CustomerImageComponent,
    RegionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
