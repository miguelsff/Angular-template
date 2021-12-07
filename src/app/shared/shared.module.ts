import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    MainLayoutComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenubarModule
  ]
})
export class SharedModule { }
