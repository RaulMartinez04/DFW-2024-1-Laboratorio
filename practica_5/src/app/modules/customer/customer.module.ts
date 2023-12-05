import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionComponent } from './_components/region/region.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CustomerComponent } from './_components/customer/customer.component';
import { CustomerImageComponent } from './_components/customer-image/customer-image.component';

import {NgxPhotoEditorModule} from "ngx-photo-editor";

@NgModule({
  declarations: [
    RegionComponent,
    CustomerComponent,
    CustomerImageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgxPhotoEditorModule,
  ],
  exports: [
    RegionComponent,
    // CommonModule,
  ]
})
export class CustomerModule { }

