import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePagePublicComponent } from './pages/home-page-public/home-page-public.component';
import { PublicRoutingModule } from './routes/public-routing.module';

@NgModule({
  declarations: [
    HomePagePublicComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
