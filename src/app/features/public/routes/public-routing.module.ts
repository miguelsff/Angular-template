import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagePublicComponent } from '../pages/home-page-public/home-page-public.component';

const routes: Routes = [
  { path: '', component: HomePagePublicComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
