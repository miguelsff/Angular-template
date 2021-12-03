import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from 'src/app/shared/layouts/main-layout/main-layout.component';
import { LoginPageAuthComponent } from '../pages/login-page-auth/login-page-auth.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: 'login', component: LoginPageAuthComponent },
      { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
