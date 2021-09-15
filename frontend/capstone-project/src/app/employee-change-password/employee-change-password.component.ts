import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-change-password',
  templateUrl: './employee-change-password.component.html',
  styleUrls: ['./employee-change-password.component.css']
})
export class EmployeeChangePasswordComponent implements OnInit {

  msg?:string;
  empRef = new FormGroup({
    emailid: new FormControl(),
    password: new FormControl()
  })
  constructor(public empSer:EmployeeService, public router:Router) { }

  ngOnInit(): void {
  }

  changePassword(){
    let login = this.empRef.value;
    console.log(login);
    this.empSer.changePassword(login).
    subscribe(result=>{
      console.log(result)
      if(result.status==="Success"){
        console.log("Hooolllllla")
        this.router.navigate(["employePanel", login.emailid]);
      }
      //console.log(result);
    },
    e=>console.log(this.msg = e.error.msg));
  }

}

