import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { ReportService } from '../services/report.service';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  // form reference for adding the Employee
  employeeRef = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    emailid: new FormControl('', Validators.required),
    password: new FormControl({value:'welcome123', disabled:true})
  })

  // form reference for deleting the Employee
  employeeDeleteRef = new FormGroup({
    emailid:new FormControl('', Validators.required)
  })

  // form reference for generating the report
  reportForm = new FormGroup({
    type: new FormControl(),
    date: new FormControl(),
    startDate:new FormControl(),
    endDate:new FormControl(),
    pName: new FormControl(),
    cEmail: new FormControl()
  })

  //display the message
  addMsg?:string;
  deleteMsg?:string;

  reportType?:string;
  reports: any;
  reportGenerated:boolean = false;
  reportEmpty:boolean = false;

  constructor(public empSer:EmployeeService, public reportSer:ReportService) { }

  ngOnInit(): void {
  }

  // create the new employee
  employeeCreate(){
    let employee = this.employeeRef.value;
    this.empSer.addEmployee(employee)
    .subscribe(result=>this.addMsg=result.msg, error=>console.log(error));
    this.employeeRef.reset();
  }
  // delete the employee with
  employeeDelete(){
    let employee = this.employeeDeleteRef.value;
    this.empSer.deleteEmployee(employee)
    .subscribe(result=>this.deleteMsg=result.msg, error=>console.log(error));
    this.employeeRef.reset();
  }
  // generate report
  generateReport(){
    let report = this.reportForm.value;
    this.reportSer.getSpecificReport(report)
    .subscribe(result=> {
      console.log(result);
      this.reports = result;
      this.reportGenerated = true;
      if(this.reports.length == 0){
        this.reportEmpty = true;
      }
    }, error=>console.log(error));
    this.reportForm.reset();
  }
}
