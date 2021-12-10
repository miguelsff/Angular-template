import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

import { MenubarModule } from 'primeng/menubar';
import { IframeDatastudioComponent } from './components/iframe-datastudio/iframe-datastudio.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    ErrorPageComponent,
    IframeDatastudioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenubarModule
  ],
  exports: [
    IframeDatastudioComponent
  ]
})
export class SharedModule { }
