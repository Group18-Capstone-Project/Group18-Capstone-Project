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
      this.displayRequest(this.requests);
    });
  }
 displayRequest(request:Request[]){
  var tableContent = "";
            var startTable = "<table border=1 cellpadding=3 class='table'><tr><th>Description</th></tr>"
            //console.log(data);
            for(var i = 0; i < request.length; i++){
                let description = request[i].description;
                tableContent += "<tr><td>" + description + "</td></tr>"
            }
            
            var endTable = "</table>";
            tableContent = startTable + tableContent + endTable;
            let divTag = document.createElement("div");
            divTag.setAttribute("class","col-sm-6 col-md-3");
            divTag.innerHTML = tableContent;
        document.getElementById("items")!.appendChild(divTag);

      }

}
