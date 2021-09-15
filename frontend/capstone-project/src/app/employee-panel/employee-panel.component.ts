import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-panel',
  templateUrl: './employee-panel.component.html',
  styleUrls: ['./employee-panel.component.css']
})
export class EmployeePanelComponent implements OnInit {

  constructor(public activateRoute: ActivatedRoute) { }

  emailid?:string;

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => this.emailid = data.emailid);
  
  }

}
