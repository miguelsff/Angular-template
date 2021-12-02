import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageAdminComponent } from './pages/home-page-admin/home-page-admin.component';
import { AdminRoutingModule } from './routes/admin-routing.module';


@NgModule({
  declarations: [
    HomePageAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
