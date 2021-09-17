import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Request } from '../model/request';
import { ViewRequestService } from '../services/view-request.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {
  productRef = new FormGroup({
    _id:new FormControl(),
  })
  msg?:string;
  requests: Request[] = [];
  constructor(public activateRoute: ActivatedRoute, public router: Router,public requestService:ViewRequestService) { }
 
  ngOnInit(): void {
    this.requestService.fetchAll().subscribe(requests=>{
      this.requests = requests;
    });
  }
deleteRequest(){
  let deleteInfo = this.productRef.value;
  this.requestService.deleteRequest(deleteInfo).subscribe(result=>this.msg=result,error=>console.log(error));
  this.productRef.reset();
}

}
