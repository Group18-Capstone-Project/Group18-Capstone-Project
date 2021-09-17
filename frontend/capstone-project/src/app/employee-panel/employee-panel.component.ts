import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../model/order';
import { Ticket } from '../model/ticket';
import { User } from '../model/user';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-panel',
  templateUrl: './employee-panel.component.html',
  styleUrls: ['./employee-panel.component.css']
})
export class EmployeePanelComponent implements OnInit {

  constructor(public empSer:EmployeeService,public activateRoute: ActivatedRoute) { }

  emailid:string = "";


  // only display EditProfile page on initlization
  canDisplayEditProfile: boolean = false;
  canDisplayMangeAccount: boolean = false;
  canDisplayUpdateOrder:boolean = false;
  canDisplaySendRequest:boolean = false;


  showLockedUsers:boolean = false;
  showTickets:boolean = false;
  msg?:string;
  descMsg:string="";
  unlockMsg:string="";
  orderMsg:string="";
  usersWithLockedAcct: User[] = [];
  tickets: Ticket[] = []
  orders: Order[] = [];
  
  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => this.emailid = data.emailid);  
  }


  empRef = new FormGroup({
    emailid: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required])
  })

  requestRef = new FormGroup({
    description: new FormControl("",[Validators.required]),
  })

  orderRef = new FormGroup({
    userId: new FormControl("",[Validators.required]),
    status: new FormControl("",[Validators.required])
  })

  unlockRef = new FormGroup({
    email: new FormControl("",[Validators.required]),
  })





  switchToEditProfile(){
    this.canDisplayEditProfile = !this.canDisplayEditProfile;
    // this.canDisplayMangeAccount = false;
    // this.canDisplayUpdateOrder = false;
    // this.canDisplaySendRequest = false;

  }

  switchToMangeAccount(){
    //this.canDisplayEditProfile = false;
    this.canDisplayMangeAccount = !this.canDisplayMangeAccount;
    // this.canDisplayUpdateOrder = false;
    // this.canDisplaySendRequest = false;

  }

  switchToSendRequest(){
    // this.canDisplayEditProfile = false;
    // this.canDisplayMangeAccount = false;
    // this.canDisplayUpdateOrder = false;
    this.canDisplaySendRequest = !this.canDisplaySendRequest;


  }
  switchToUpdateOrder(){
    this.canDisplayUpdateOrder = !this.canDisplayUpdateOrder
    // this.canDisplayEditProfile = false;
    // this.canDisplayMangeAccount = false;
    // this.canDisplaySendRequest = false;


  }


  changePassword(){
    let login = this.empRef.value;
    console.log(login);
    this.empSer.changePassword(login).
    subscribe(result=>{
      console.log(result)
      if(result.status==="Success"){
        console.log("Hooolllllla")
        this.msg = result.msg;
      }
      console.log(result);
    },
    e=>console.log(this.msg = e.error.msg));
  }


  sendRequest(){
    let req = this.requestRef.value;
    console.log(req);
    this.empSer.sendRequestToAdmin(req)
    .subscribe(result=>{
      console.log(result)
      this.descMsg = result.msg;
      this.requestRef.reset();
    },
    e=>console.log(this.msg = e.error.msg));
  }


  getUsersWithLockedAcct() {
    this.empSer.getUrsWithLockedAcct()
      .subscribe(result => {
        console.log(result);
        this.usersWithLockedAcct = result;
        this.showLockedUsers = true;
      },
      e => console.log(e))
  }

  getTickets() {
    this.empSer.getTickets()
    .subscribe(result => {
      console.log(result);
      this.tickets = result;
      this.showTickets = true;
    },
    e => console.log(e))
  }

  // called when unlock account is clicked
  unlockAccount(){
    let email = this.unlockRef.value;
    this.empSer.unlockAccount(email)
    .subscribe(result => {
      if(result.status==="Success"){
        console.log("Hooolllllla")
        this.unlockMsg = result.msg;
      }
    },
    e => console.log(this.unlockMsg = e.error.msg))
  }


  // called when get order button is clicked
  getOrders(){
    this.empSer.getOrders()
    .subscribe(result => {
      console.log(result);
      this.orders = result;
      //this.showTickets = true;
    },
    e => console.log(e))
  }


  // update order satus
  updateOrder() {
    let order = this.orderRef.value;
    console.log(order);
    this.empSer.updateOrder(order)
    .subscribe(result => {
      if(result.status==="Success"){
        console.log("Hooolllllla")
        this.orderMsg = result.msg;
      }
      this.orderRef.reset();
    },
    e => console.log(this.orderMsg = e.error.msg))
  }







}
