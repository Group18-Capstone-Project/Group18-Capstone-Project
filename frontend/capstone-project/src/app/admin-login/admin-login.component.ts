import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginRef = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  });
  msg?:string;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  checkAdmin(){
    let login = this.loginRef.value;
    console.log(login);
      if(login.email == "admin" && login.password == "admin"){
        this.router.navigate(["adminPanel"]);
      }
      else{
        this.msg = "Incorrect username or password";
    }
    this.loginRef.reset();
  }
}
