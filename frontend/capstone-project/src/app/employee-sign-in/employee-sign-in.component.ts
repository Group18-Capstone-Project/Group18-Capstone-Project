import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-sign-in',
  templateUrl: './employee-sign-in.component.html',
  styleUrls: ['./employee-sign-in.component.css']
})
export class EmployeeSignInComponent implements OnInit {
  msg?:string;
  empRef = new FormGroup({
    emailid: new FormControl(),
    password: new FormControl()
  })
  constructor(public empSer:EmployeeService, public router:Router) { }

  ngOnInit(): void {
  }

  checkUser(){
    let login = this.empRef.value;
    this.empSer.signIn(login).subscribe(result=>console.log(result), error=>this.msg=error);
    this.empRef.reset();
  }

}
