import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http: HttpClient) { }

  signIn(emp: Employee): Observable<any>{
    return this.http.post("http://localhost:9090/api/employee", emp, { responseType: "text"});
  }
}
