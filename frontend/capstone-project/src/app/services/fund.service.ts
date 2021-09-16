import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fund } from '../model/fund';

@Injectable({
  providedIn: 'root'
})
export class FundService {
  fund_port = "http://localhost:9090/api/fund";

  constructor(public http:HttpClient) { }

  addFunds(fund:Fund): Observable<any>{
    return this.http.put(this.fund_port+ "/addFunds", fund, {responseType: 'text'});
  }
}
