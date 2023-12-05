export class Invoice{
    invoice_id: number=0;
    cart_id: number=0;
    description: string="";
    rfc: string="";
    

    getCartId(){
        return this.cart_id;
    }

    getInvoiceId(){
        return this.invoice_id;
    }
}
