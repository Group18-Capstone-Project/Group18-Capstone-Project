import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';

const routes: Routes = [
  {path:"userSignIn",component:UserSignInComponent},
  {path:"userSignUp",component:UserSignUpComponent},
  {path:"userPanel/:user",component:UserPanelComponent},
  {path:"",redirectTo:"userSignIn",pathMatch:"prefix"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
