import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagePublicComponent } from './features/public/pages/home-page-public/home-page-public.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./features/public/public.module').then(m => m.PublicModule) },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule) },
  { path: '**', component: HomePagePublicComponent, data: { title: '404 - Página no encontrada' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
