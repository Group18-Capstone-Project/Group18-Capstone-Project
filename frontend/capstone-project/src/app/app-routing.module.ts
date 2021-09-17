import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { HomeComponent } from './home/home.component';

import {AdminLoginComponent} from './admin-login/admin-login.component';
import {AddProductComponent} from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-user/delete-user.component';
import { ViewRequestComponent } from './view-request/view-request.component';

import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { EmployeeSignInComponent } from './employee-sign-in/employee-sign-in.component';
import { EmployeeChangePasswordComponent } from './employee-change-password/employee-change-password.component';

import { CartComponent } from './cart/cart.component';

import { TicketComponent } from './ticket/ticket.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { FundAddComponent } from './fund-add/fund-add.component';


const routes: Routes = [
  {path: "home", component:HomeComponent},
  {path:"userSignIn",component:UserSignInComponent},
  {path:"userSignUp",component:UserSignUpComponent},
  {path:"userPanel/:user",component:UserPanelComponent},
  {path:"ticket", component:TicketComponent},
  {path:"adminPanel", component:AdminPanelComponent},
  {path:"employePanel/:emailid", component:EmployeePanelComponent},
  {path:"employeSignIn", component:EmployeeSignInComponent},
  {path:"employeChangePassword", component:EmployeeChangePasswordComponent},

  {path: "myCart/:userID", component: CartComponent },

  {path:"adminLogin",component:AdminLoginComponent},

  {path:"addProduct",component:AddProductComponent},
  {path:"updateProduct",component:UpdateProductComponent},
  {path:"deleteProduct",component:DeleteProductComponent},
  {path:"viewRequest",component:ViewRequestComponent},
  {path:"userEdit", component:UserEditComponent},
  {path:"addFunds", component:FundAddComponent},


  {path:"",redirectTo:"userSignIn",pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
