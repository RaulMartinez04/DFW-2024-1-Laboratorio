import { Component } from '@angular/core';
import { DtoCartDetails } from '../../_dtos/dto-cart-details';
import { CartService } from '../../_services/cart.service';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';

declare var $: any; // jquery
var quantity: any;


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartProducts: DtoCartDetails[]=[];

  constructor(
    private cartService: CartService,
    private router: Router
  ){ }

  ngOnInit(){
    this.getCart();
  }

 addToChart(cart: any){
   this.cartProducts.push(cart);
   this.cartService.addToCart(cart).subscribe(
   res => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      toast: true,
      text: 'El producto ha sido agregado al carrito',
      background: '#E8F8F8',
      showConfirmButton: false,
      timer: 2000
    });

    this.getCart();

  },
  err => {
    // muestra mensaje de error
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      toast: true,
      showConfirmButton: false,
      text: err.error.message,
      background: '#F8E8F8',
      timer: 2000
    });
  }
);
 }

  getCart(){
    this.cartService.getCart().subscribe(
      res => {

        this.cartProducts = res; // asigna la respuesta de la API a la lista de productos
      },
      err => {
        // muestra mensaje de error
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          toast: true,
          showConfirmButton: false,
          text: err.error.message,
          background: '#F8E8F8',
          timer: 2000
        });
      }
    );
    
  }

  removeFromCart(id_product: number){
    this.cartService.removeFromCart(id_product).subscribe(
      res => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          toast: true,
          text: 'El producto ha sido removido del carrito',
          background: '#E8F8F8',
          showConfirmButton: false,
          timer: 2000
        });

        this.getCart();

      },
      err => {
        // muestra mensaje de error
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          toast: true,
          showConfirmButton: false,
          text: err.error.message,
          background: '#F8E8F8',
          timer: 2000
        });
      }
    );

  }  

  showProduct(gtin: string){
    this.router.navigate(['product/'+ gtin]);
  }

}
