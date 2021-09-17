import { Order } from './../model/order';
import { Cart } from './../model/cart';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class OrdersService {

order:Cart[] = [];


constructor(public http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  ROOT = "http://localhost:9090/api/user";

	getOrder(){

		return this.order;

	}

	setOrder(shoppingCart:Cart[]){

	
		this.order=shoppingCart;

	}

	addOrder(order:any){

		return this.http.post(this.ROOT+ "/addOrder",order,this.httpOptions);

	}


}
