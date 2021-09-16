import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  msg?:String;
  userRef = new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
    dob: new FormControl(),
    address: new FormControl()
  })
  constructor(public userSer:UserService, public router:Router) { }

  ngOnInit(): void {
  }

  editAccount(){
    let user = this.userRef.value;
    this.userSer.changeAccount(user).subscribe(result=>{this.msg="Account updated"}, err=>this.msg = err);
    this.userRef.reset();
  }

}
