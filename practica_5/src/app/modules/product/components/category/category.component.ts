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

  getCategories(){
    let category1 = new Category(1, "190406", "videojuego", "agotado");
    let category2 = new Category(2, "311020", "videojuego", "rentado");
    let category3 = new Category(3, "190972", "serie", "agotado");

    this.categories.push(category1);
    this.categories.push(category2);
    this.categories.push(category3);
  }

  onSubmit(){
    this.submitted = true;

    if(this.form.invalid) return;

    this.submitted = false;

    let categoria = new Category(0, this.form.controls['code'].value!, this.form.controls['category'].value!, "Aprobado");
    this.categories.push(categoria);
    
    $("#modalForm").modal("hide");

    alert("Región guardada exitosamente!");

  }

  // modals 

  showModalForm(){
    this.form.reset();
    this.submitted = false;
    $("#modalForm").modal("show");
  }
}
