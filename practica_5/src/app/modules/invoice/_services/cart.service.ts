import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DtoCartDetails } from '../_dtos/dto-cart-details';
import { Cart } from '../_models/cart';



@Injectable({
  providedIn: 'root'
})

export class CartService {

  private url = "http://localhost:8080";
  private route = "/cart";
  
  cart: Cart=new Cart();
  
  

  constructor(private http: HttpClient) { }

  addToCart(cart: any) {
    
    return this.http.post(this.url + this.route, cart);
  }

  deleteCart(id: number) {
    return this.http.delete(this.url + this.route + "/" + id);
  }

  /* REQUERIMIENTO 4. Implementar servicio Cart - función getCart() */
  getCart() {
    return this.http.get<DtoCartDetails[]>(this.url + this.route);
  }

  /* REQUERIMIENTO 4. Implementar servicio Cart - función removeFromCart() */
  removeFromCart(id_product: number) {
    return this.http.delete(this.url + this.route + "/"+ id_product);
  }

  getQuantity(){
    const quantityString = localStorage.getItem('quantity')==null? 0 : localStorage.getItem('quantity');
    return quantityString;
  }
}
