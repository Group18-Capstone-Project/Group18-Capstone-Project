import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from "rxjs/operators";
import { Product } from '../model/product';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  host = "http://localhost:9090";
	endpoint = "/api/product/getAllProducts";

  constructor(private http: HttpClient) { }

  getAll():Observable<Product[]> {
		const url = this.host + this.endpoint;
    
		return this.http.get<Product[]>(url)
			.pipe(
				tap(data => console.log(data)),
				catchError(error => throwError(error))
			)
	}

}
