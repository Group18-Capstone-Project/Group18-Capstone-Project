import { Cart } from './../model/cart';

import { OrdersService } from './../services/orders.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { min } from 'rxjs/operators';
import { Product } from '../model/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  userName?: string;


  
products: Product[] = [];

shoppingCart: Cart[] = [];

cartSize : number = 0 ;

  constructor(public activateRoute: ActivatedRoute, public router: Router,public productsService:ProductsService,public orderser:OrdersService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => this.userName = data.user);
    this.productsService.getAll().subscribe(products=>{
      this.products = products;
      this.displayProducts(this.products);
    });
    
  }

  displayProducts(products:Product[]) {
    this.products = products;
    console.log(this.products);
    
   
  }


  

  addToCart(product:Product){

    console.log(product);

    let quantity = (<HTMLInputElement>document.getElementById(product.name)).value;

    console.log(quantity);

    let cartItem = {

      name:product.name,
      price:product.price,
      quantity: Number(quantity)

    } 
    this.shoppingCart.push(cartItem)

    console.log(this.shoppingCart);

    this.cartSize+=Number(quantity);


  }

  sendCart(){

    this.orderser.setOrder(this.shoppingCart);
    this.router.navigate(['myCart',this.userName])

  }



}
