import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  api = "http://localhost:9090/api/admin";
  constructor(public http: HttpClient) { }

  getSpecificReport(report: any): Observable<any> {
    if (report.type == 'daily') {
      let day = new Date(report.date).toISOString();
      return this.http.get<any>(this.api + "/getReportByDate" + '/?startDate=' + day+'&endDate='+day);
    } else if (report.type == 'weekly') {
      let result = this.calculateTheWeek(report.date);
      report.startDate = result[0];
      report.endDate = result[1];
      console.log(report);
      return this.http.get<any>(this.api + "/getReportByDate" + '/?startDate=' + result[0].toISOString()+'&endDate='+result[1].toISOString());
    } else if (report.type == 'monthly') {
      let result = this.calculateTheMonth(report.date);
      console.log(result);
      return this.http.get<any>(this.api + "/getReportByDate" + '/?startDate=' + result[0].toISOString()+'&endDate='+result[1].toISOString());
    } else if (report.type == 'product') {
      return this.http.get<any>(this.api + "/getReportByProduct" + '/?pName=' + report.pName);
    } else if (report.type == 'customer') {
      return this.http.get<any>(this.api + "/getReportByEmail" + '/?cEmail=' + report.cEmail);
    } else {
      console.log("undefined report type");
      //returns the empty Observable
      return of();
    }
  }
  // calculate the first day and last day of the week with given date
  calculateTheWeek(input: any): [Date, Date] {
    let selectedDate = new Date(input);
    let first = selectedDate.getDate() - selectedDate.getDay(); // First day is the day of the month - the day of the week
    let last = first + 6; // last day is the first day + 6

    let firstDay = new Date(selectedDate.setDate(first));
    let lastDay = new Date(selectedDate.setDate(last));

    console.log(first.toString() + firstDay);
    console.log(last.toString() + lastDay);
    return [firstDay, lastDay];
  }
  // calculate the first day and last day of the month with given date
  calculateTheMonth(input: any): [Date, Date] {
    let selectedDate = new Date(input);
    let firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    let lastDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
    return [firstDay, lastDay];
  }
}
