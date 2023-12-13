import { Component } from '@angular/core';
import { CartService } from './modules/invoice/_services/cart.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica_5';

  constructor(
    private cartService: CartService
  ){}
   
  
  getQuantity(){
   return this.cartService.getQuantity();
  }
}

