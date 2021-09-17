import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FundService } from '../services/fund.service';

@Component({
  selector: 'app-fund-add',
  templateUrl: './fund-add.component.html',
  styleUrls: ['./fund-add.component.css']
})
export class FundAddComponent implements OnInit {
  fundRef = new FormGroup({
    userId:new FormControl(),
    account:new FormControl(),
    amount:new FormControl()
  })
  msg?:String;

  constructor(public fundSer: FundService, public router:Router) { }

  ngOnInit(): void {
  }

  addFunds(){
    
    let fund = this.fundRef.value;
    console.log(fund);
    this.fundSer.addFunds(fund).subscribe(result=>{
      console.log(result);
      this.msg=result}, 
      err=>{
        this.msg="Unable to add amount, please try again"
        console.log(err);
      });
        this.fundRef.reset();

  }

}
