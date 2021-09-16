import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Request } from '../model/request';
import { ViewRequestService } from '../services/view-request.service';
@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {
  requests: Request[] = [];
  constructor(public activateRoute: ActivatedRoute, public router: Router,public requestService:ViewRequestService) { }

  ngOnInit(): void {
    this.requestService.fetchAll().subscribe(requests=>{
      this.requests = requests;
    });
  }


}
