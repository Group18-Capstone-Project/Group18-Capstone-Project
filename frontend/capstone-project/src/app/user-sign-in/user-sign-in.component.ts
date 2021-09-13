import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {

  loginRef = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  });
  msg?:string;

  constructor(public userSer:UserService, public router:Router) { }
    
  ngOnInit(): void {
  }

  checkUser() {
    let login = this.loginRef.value;
    this.userSer.signInAccount(login).
    subscribe(result=>{
      if(result=="Success"){
        this.router.navigate(["userPanel", login.email]);
      }else {
          this.msg = result;
      }
    },
    error=>console.log(error));
    this.loginRef.reset();
  }

}
