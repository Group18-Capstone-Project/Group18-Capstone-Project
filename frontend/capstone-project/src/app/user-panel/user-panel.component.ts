import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  userName?:string;
  constructor(public activateRoute:ActivatedRoute,public router:Router) { } 
  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>this.userName=data.user);
  }
  
  logout() {
    this.router.navigate(["login"]);
  }

}
