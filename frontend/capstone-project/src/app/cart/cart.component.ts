import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdersService } from '../services/orders.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  


  msg?:string[];

  constructor(public ordersService:OrdersService) { }

  ngOnInit(): void {

    this.showData();

  }

  showData(){

    this.msg=this.ordersService.getOrder();

  }



}
