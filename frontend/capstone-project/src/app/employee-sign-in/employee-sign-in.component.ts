import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(public activateRoute: ActivatedRoute, public empSer:EmployeeService, public router:Router) { }

  ngOnInit(): void {
  }

  checkEmployee(){
    let login = this.empRef.value;
    console.log(login);
    this.empSer.signIn(login).subscribe( result => {
      console.log(result);
      if(result === "Success" && login.password === "welcome123"){
        console.log("hola");
        this.router.navigate(["employeChangePassword"]);
      }

      if(result === "Success"  && login.password !== "welcome123"){
        this.router.navigate(["employePanel", login.emailid]);
      }else{
        this.msg = result;
      }

    }, error=>this.msg=error);
    this.empRef.reset();
  }

}
