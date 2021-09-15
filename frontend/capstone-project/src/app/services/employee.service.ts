import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  api="http://localhost:9090/api/employee";

  constructor(public http: HttpClient) { }

  signIn(emp: Employee): Observable<any>{
    return this.http.post(this.api+"/signIn", emp, { responseType: "text"});
  }

  addEmployee(emp:Employee): Observable<any>{
    return this.http.post(this.api+"/addEmployee", emp, { responseType: 'json' });
  }
  deleteEmployee(emp:Employee): Observable<any>{
    return this.http.delete(this.api+"/deleteEmployee/"+emp.emailid);
  }
}
