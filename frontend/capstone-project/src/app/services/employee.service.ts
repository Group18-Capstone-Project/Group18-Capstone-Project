import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  ROOT = "http://localhost:9090/api/employee";

  signIn(emp: Employee): Observable<any>{

    return this.http.post(`${this.ROOT}/signIn`, emp, { responseType: "text"});
  }

  addEmployee(emp:Employee): Observable<any>{
    return this.http.post(this.ROOT+"/addEmployee", emp, { responseType: 'json' });
  }

  deleteEmployee(emp:Employee): Observable<any>{
    return this.http.delete(this.ROOT+"/deleteEmployee/"+emp.emailid);
  }


  changePassword(emp:any) :Observable<any> {
    return this.http.put<any>(`${this.ROOT}/updatePassword`, emp, this.httpOptions)

  }

  sendRequestToAdmin(req: any) :Observable<any> {
    return this.http.post(`${this.ROOT}/sendProductRequest`, req, this.httpOptions);
  }

  getUrsWithLockedAcct() : Observable<any> {
    return this.http.get(`${this.ROOT}/lockedAccount`, this.httpOptions);
  }

  getTickets() : Observable<any> {
    return this.http.get(`${this.ROOT}/getTickets`, this.httpOptions);
  }

  // unlock user account
  unlockAccount(email:any) : Observable<any> {
    return this.http.put(`${this.ROOT}/unlockUser`,email, this.httpOptions);
  }

  // get the orders
  getOrders() : Observable<any> {
    return this.http.get(`${this.ROOT}/getOrders`, this.httpOptions);
  }


  // update order status
  updateOrder(order: any) : Observable<any> {
    return this.http.put(`${this.ROOT}/updateOrderStatus`, order, this.httpOptions);
  }




}
