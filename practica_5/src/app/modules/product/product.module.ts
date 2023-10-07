import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './components/category/category.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
