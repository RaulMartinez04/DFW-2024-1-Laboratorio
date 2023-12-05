import { Injectable } from '@angular/core';
import { Invoice } from '../_models/invoice';
import { HttpClient } from '@angular/common/http';
import { DtoInvoiceList } from '../_dtos/dto-invoice-list';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private url = "http://localhost:8080";
  private route = "/invoice";

  constructor(private http: HttpClient) { }

  getInvoice(id: number) {
    return this.http.get<Invoice>(this.url + this.route + "/" + id + "/items");
  }

  /* REQUERIMIENTO 4. Implementar servicio Invoice - función getInvoices() */
  getInvoices() {
    return this.http.get<DtoInvoiceList[]>(this.url + this.route);
  } 
  /* REQUERIMIENTO 4. Implementar servicio Invoice - función generateInvoice() */
  //esto lo puse mientras pero no estoy seguro aqui
  generateInvoice(invoice: any) {
    return this.http.post(this.url + this.route, invoice);
  }

}
