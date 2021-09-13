import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  accountRef = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    dob:new FormControl(),
    phone:new FormControl(),
    address:new FormControl()
  })

  msg?: string;

  constructor(public userSer: UserService) { }
  
  ngOnInit(): void {
  }

  accountCreate() {
    let account = this.accountRef.value;

    this.userSer.signUpAccount(account)
    .subscribe(result=>this.msg=result,error=>console.log(error));
    this.accountRef.reset();
  }

}
