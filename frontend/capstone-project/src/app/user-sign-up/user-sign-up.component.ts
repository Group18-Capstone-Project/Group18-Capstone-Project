import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FundService } from '../services/fund.service';
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
  accNum?:Number;

  constructor(public userSer: UserService, public fundSer: FundService) { }
  
  ngOnInit(): void {
  }

  accountCreate() {
    let account = this.accountRef.value;
    this.userSer.signUpAccount(account)
    .subscribe(result=>this.msg=result,error=>console.log(error));
    this.fundSer.createAccount(account).subscribe(result=>console.log(result), error=>console.log(error));
    this.accountRef.reset();
    
  }

}
