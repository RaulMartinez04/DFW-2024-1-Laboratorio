import { Component } from '@angular/core';
import { DtoCartDetails } from '../../_dtos/dto-cart-details';
import { CartService } from '../../_services/cart.service';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';

declare var $: any; // jquery

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items: DtoCartDetails[]=[];

  constructor(
    private cartService: CartService,
    private router: Router){}

  ngOnInit(){
    this.getCart();
  }
  
  deleteCart(id: number) {
    this.cartService.deleteCart(id).subscribe(

     res => {
        // muestra mensaje de confirmación
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          toast: true,
          text: 'El carrito ha sido eliminado',
          background: '#E8F8F8',
          showConfirmButton: false,
          timer: 2000
        });

        this.getCart(); // consulta el carrito con los cambios realizados
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
      })
  }

  getCart() {
    this.cartService.getCart().subscribe(
      res => {
        this.items = res; // asigna la respuesta de la API a la lista de clientes
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

  removeFromCart(id: number) {
    this.cartService.removeFromCart(id).subscribe(
      res => {
        // muestra mensaje de confirmación
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          toast: true,
          text: 'El producto ha sido removido del carrito',
          background: '#E8F8F8',
          showConfirmButton: false,
          timer: 2000
        });

        this.getCart(); // consulta clientes con los cambios realizados
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

  showCustomer(id: number){
    this.router.navigate(['cart/' + id]);
  }

}
