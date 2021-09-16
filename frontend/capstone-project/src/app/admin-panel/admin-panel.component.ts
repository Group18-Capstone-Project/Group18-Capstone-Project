import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

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

  //display the message
  addMsg?:string;
  deleteMsg?:string;

  constructor(public empSer:EmployeeService, public router:Router) { }

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
  gotoProduct(){
    this.router.navigate(["addProduct"])
  }
updateProduct(){
    this.router.navigate(["updateProduct"])
  }
  deleteProduct(){
    this.router.navigate(["deleteProduct"])
  }
}
