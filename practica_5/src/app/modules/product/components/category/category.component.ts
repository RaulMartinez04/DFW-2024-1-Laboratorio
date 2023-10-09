import { Component } from '@angular/core';
import { Category } from '../../_models/category';

declare var $: any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  categories: Category[] = [];

  constructor(){}

  ngOnInit(){
    this.getCategories();
  }

  getCategories(){
    let category1 = new Category(1, 190406, "videojuego", "agotado");
    let category2 = new Category(2, 311020, "videojuego", "rentado");
    let category3 = new Category(3, 190972, "serie", "agotado");

    this.categories.push(category1);
    this.categories.push(category2);
    this.categories.push(category3);
  }
}
