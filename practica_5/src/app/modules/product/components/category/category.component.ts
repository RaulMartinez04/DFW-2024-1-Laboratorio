import { Component } from '@angular/core';
import { Category } from '../../_models/category';
import { FormBuilder, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent {
  categories: Category[] = [];
  categoryUpdated: number = 0;

  form = this.formBuilder.group({
    category: ["", [Validators.required]],
    code: ["", [Validators.required]],
  });

  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(){
    this.getCategories();
  }

  disableCategory(id: number){
    for(let category of this.categories){
      if(category.category_id == id){
        category.status = 0;
        alert("Región desactivada exitosamente!");
        break;
      }
    }
    console.log("SALIR")
  }

  enableCategory(id: number){
    for(let category of this.categories){
      if(category.category_id == id){
        category.status = 1;
        alert("Región activada exitosamente!");
        break;
      }
    }
  }

  getCategories(){
    let category1 = new Category(1, "190406", "videojuego", 0);
    let category2 = new Category(2, "311020", "videojuego", 1);
    let category3 = new Category(3, "190972", "serie", 0);

    this.categories.push(category1);
    this.categories.push(category2);
    this.categories.push(category3);
  }


  onSubmit(){
    if(this.categoryUpdated == 0){
      this.onSubmitCreate();
    }else{
      this.onSubmitUpdate();
    }
  }

  onSubmitCreate(){
    this.submitted = true;

    if(this.form.invalid) return;

    this.submitted = false;

    let category = new Category(0, this.form.controls['category'].value!, this.form.controls['code'].value!, 1);
    console.log(this.form.value);
    this.categories.push(category);
    
    $("#modalForm").modal("hide");

    alert("Región guardada exitosamente!");

  }

  onSubmitUpdate(){
    this.submitted = true;

    if(this.form.invalid) return;

    this.submitted = false;

    for(let category of this.categories){
      if(category.category_id == this.categoryUpdated){
        category.category = this.form.controls['category'].value!;
        category.code = this.form.controls['code'].value!;
        break;
      }
    }
    
    $("#modalForm").modal("hide");

    alert("Región actualizada exitosamente!");

    this.categoryUpdated = 0;

  }

  updateCategory(category: Category){
    this.categoryUpdated = category.category_id;
    
    this.form.reset();
    this.form.controls['category'].setValue(category.category);
    this.form.controls['code'].setValue(category.code);
    
    this.submitted = false;
    $("#modalForm").modal("show");
  }

  // modals 

  showModalForm(){
    this.form.reset();
    this.categoryUpdated = 0;
    this.submitted = false;
    $("#modalForm").modal("show");
  }
}
