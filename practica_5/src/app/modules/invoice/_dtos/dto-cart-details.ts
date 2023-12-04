
import { Item } from "../_models/item";

export class DtoCartDetails{
    cart_id: number = 0;
    rfc: string = "";
    quantity: number = 0;
    status: number = 0;
    gtin: string = "";
    items: Item[]=[];
    image: string = "";
}