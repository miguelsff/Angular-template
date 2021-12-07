import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleAnalyticsCustomService } from './services/google-analytics-custom.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    GoogleAnalyticsCustomService
  ]
})
export class CoreModule { }
