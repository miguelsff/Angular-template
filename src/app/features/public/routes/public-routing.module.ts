import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from 'src/app/shared/layouts/main-layout/main-layout.component';
import { HomePagePublicComponent } from '../pages/home-page-public/home-page-public.component';
import { AuthGuardGuard } from 'src/app/core/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomePagePublicComponent, canActivate: [AuthGuardGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
