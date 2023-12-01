import { Product } from "../../product/_models/product"

export class DtoCartDetails{
    cart_id: number = 0;
    rfc: string = "";
    quantity: number = 0;
    status: number = 0;
    // gtin: string = "";
    product: Product = new Product();
    image: string = "";
}