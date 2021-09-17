import { User } from './../model/user';
import { Cart } from './../model/cart';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdersService } from '../services/orders.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  


  orderMsg?:string;

  shoppingCart : Cart[] = [];

  userId?: string;

  finalPrice: number = 0;
  finalQty: number = 0;

  constructor(public ordersService:OrdersService, public activatedRoute:ActivatedRoute) {

   }
// 
   displayedColumns: string[] = ['name', 'price', 'quantity'];
   
// 
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => this.userId = data.userId);

    this.shoppingCart = this.ordersService.getOrder();

    console.log(this.shoppingCart);

    this.shoppingCart.forEach(element => {

      this.finalPrice+=element.price*element.quantity;
  
      this.finalQty+=element.quantity;
       
     });

  }

  placeOrder(){

    let totalPrice = 0;

    let totalQuantity = 0;

    let pordered = new Map();

    let pstring = "{"

   this.shoppingCart.forEach(element => {

    pstring += element.name;
    pstring += ":";
    pstring += element.quantity;
    pstring += ","

    pordered.set(element.name,element.quantity)

    totalPrice+=element.price*element.quantity;

    totalQuantity+=element.quantity;
     
   });
   pstring = pstring.slice(0, -1)
   pstring += "}"

   console.log(pstring);
   console.log(JSON.stringify(pstring));

  let p = JSON.stringify(pstring);
  
  console.log(JSON.parse(p));
   
   let order = {

    userId: this.userId,
    pOrdered: pordered, // product map ordered by user, {"apple"=>"5", "banana"=>"1"}
    pTotalPrice: totalPrice, // total price of the products ordered
    pQuantity: totalQuantity, // the number of products ordered, total items
    status: 'ordered' // status: delivered, shipped, out for delivery and etc.

   }

  this.ordersService.addOrder(order)
  .subscribe(result=>this.orderMsg = String(result),error=>console.log(error));

  }



}
