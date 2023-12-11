import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductModule } from './modules/product/product.module';
import { CustomerModule } from './modules/customer/customer.module'
import { NgxPhotoEditorModule } from "ngx-photo-editor";
import { AboutUsComponent } from './modules/about-us/components/about-us/about-us.component';
import { AboutUsModule } from './modules/about-us/about-us.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    NgxPhotoEditorModule,
    CustomerModule,
    AboutUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
