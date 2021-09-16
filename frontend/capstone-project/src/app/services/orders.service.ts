import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class OrdersService {

order:any[] = [];


//   host = "http://localhost:9090";
// 	endpoint = "/orders";

  constructor(private http: HttpClient) { }

	getOrder(){
		return this.order;

	}

	setOrder(name:any, price:any, ){

		this.order.push(name);
		this.order.push(price);
		
	}


}
