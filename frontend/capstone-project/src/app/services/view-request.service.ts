import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from "rxjs/operators";
import { Request } from '../model/request';
@Injectable({
  providedIn: 'root'
})
export class ViewRequestService {
  host = "http://localhost:9090/api/admin/viewRequest";

  constructor(private http: HttpClient) { }

  fetchAll():Observable<Request[]> {
		return this.http.get<Request[]>(this.host)
			.pipe(
				tap(data => console.log(data)),
				catchError(error => throwError(error))
			)
	}
}
