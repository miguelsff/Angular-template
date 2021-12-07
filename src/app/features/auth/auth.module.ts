import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageAuthComponent } from './pages/login-page-auth/login-page-auth.component';
import { AuthRoutingModule } from './routes/auth-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    LoginPageAuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CardModule
  ]
})
export class AuthModule { }
