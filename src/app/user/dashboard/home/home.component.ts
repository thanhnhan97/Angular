import { TempCart } from './../../../shared/models/cart';
import { Product } from './../../../shared/models/product';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BaseService } from '../../../shared/base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listProduct$: Observable<Product[]>;
  listCart$ : Observable<TempCart[]>;
  constructor(
    private service: BaseService,
    private router : Router
  ) { }

  ngOnInit() {
    //Load Product
    this.listProduct$ = this.service.getAll('/product') as Observable<Product[]>;
  }

  selectListCart()
  {
    let key = 'cart';
    let itemsCart : Observable<TempCart[]> = of(
      JSON.parse(
        localStorage.getItem(key)
      )
    );
    return itemsCart;
  }

  addCart(item: Product, quantity: number)
  {
     let tempCart: TempCart = null;
    tempCart.productID =  item.ProductID;
    tempCart.Image =  item.Image;
    tempCart.Name =  item.Name;
    tempCart.quantity = quantity
    tempCart.cartID =  null;
    tempCart.dateCreate = null;
    tempCart.status = false;
    tempCart.totalMoney =  ( item.Price * quantity );
    tempCart.Price = item.Price;
    
    let list = this.selectListCart();
    if(list == undefined) //<-- check list item cart exist
    {
      //if exist
      list.forEach(
        data => {
          let index = data.findIndex(x => x.productID === item.ProductID);
          if(index < -1)
          {
            //if item add didn't exist in list cart, then add new item
            data.push(tempCart); 

            //set session
            localStorage.setItem('cart', data.toString());
          }
          else{
              data[index].quantity += tempCart.quantity;
              data[index].totalMoney += tempCart.totalMoney;
              localStorage.setItem('cart', data.toString());
          }
        }
      )
    }else{
      //if don't exist list cart
      let list: TempCart[] = [];
      list.push(tempCart); 
      let json = JSON.stringify(list);   
      localStorage.setItem('cart', json);
      this.router.navigate(['/cart']);
    }
  }

}
