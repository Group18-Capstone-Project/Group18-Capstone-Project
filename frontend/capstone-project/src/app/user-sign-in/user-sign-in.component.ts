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
  attempt:number = 3;

  constructor(public userSer:UserService, public router:Router) { }
    
  ngOnInit(): void {
  }

  checkUser() {
    let login = this.loginRef.value;
    if(this.attempt>1){
    this.userSer.signInAccount(login).
    subscribe(result=>{
      if(result=="Success"){
        this.router.navigate(["userPanel", login.email]);
      }else {
          this.msg = result;
          this.attempt--;
          console.log(this.attempt);
      }
    },
    error=>console.log(error));
  }else{
    this.msg = "Failed 3 attempts.";
    this.userSer.updateAccountStatus(login, true).subscribe(result=>{
      if(result == "Success"){
        let countDown = 3;
        setInterval(()=>{
          this.msg = `Your account is locked. You will go to the page to raise the ticket in ${countDown}s`;
          countDown--;
          setTimeout(() => {
            this.router.navigate(["ticket"]);
          }, 3000);
        }, 1000);
        
      }else{
        this.msg = result;
      }
    });
  }
    this.loginRef.reset();
  }

}
