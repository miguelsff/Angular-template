import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageAuthComponent } from './pages/login-page-auth/login-page-auth.component';
import { AuthRoutingModule } from './routes/auth-routing.module';


@NgModule({
  declarations: [
    LoginPageAuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
