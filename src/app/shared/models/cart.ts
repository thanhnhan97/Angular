export interface Cart
{
    cartID : number;
    productID : number;
    dateCreate : Date;
    quantity : string;
    status : boolean;
    totalMoney : number;    
}