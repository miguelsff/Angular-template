import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageAdminComponent } from '../pages/home-page-admin/home-page-admin.component';

const routes: Routes = [
  { path: '', component: HomePageAdminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
