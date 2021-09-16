import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { EmployeePanelComponent } from './employee-panel/employee-panel.component';
import { EmployeeSignInComponent } from './employee-sign-in/employee-sign-in.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { HomeComponent } from './home/home.component';
import { EmployeeChangePasswordComponent } from './employee-change-password/employee-change-password.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-user/delete-user.component';
import { ViewRequestComponent } from './view-request/view-request.component';

import { UserEditComponent } from './user-edit/user-edit.component';
import { FundAddComponent } from './fund-add/fund-add.component';


@NgModule({
  declarations: [
    AppComponent,
    UserPanelComponent,
    UserSignUpComponent,
    UserSignInComponent,
    EmployeePanelComponent,
    EmployeeSignInComponent,
    AdminPanelComponent,
    HomeComponent,
    EmployeeChangePasswordComponent,
    AdminLoginComponent,
    AddProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ViewRequestComponent,
    UserEditComponent,
    FundAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
