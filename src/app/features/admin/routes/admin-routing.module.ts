import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from 'src/app/shared/layouts/main-layout/main-layout.component';
import { HomePageAdminComponent } from '../pages/home-page-admin/home-page-admin.component';
import { AuthGuardGuard } from 'src/app/core/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', component: HomePageAdminComponent, canActivate: [AuthGuardGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
