import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePagePublicComponent } from './pages/home-page-public/home-page-public.component';
import { PublicRoutingModule } from './routes/public-routing.module';
import { CardModule } from 'primeng/card';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomePagePublicComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    CardModule,
    SharedModule
  ]
})
export class PublicModule { }
