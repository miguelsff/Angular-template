import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageAuthComponent } from '../pages/login-page-auth/login-page-auth.component';

const routes: Routes = [
  { path: '', component: LoginPageAuthComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
