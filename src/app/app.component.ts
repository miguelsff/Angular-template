import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';

import { GoogleAnalyticsCustomService } from 'src/app/core/services/google-analytics-custom.service';
import { GoogleApiCustomService } from './core/services/google-api-custom.service';
import { ScriptLoaderService } from './core/services/script-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-template';

  constructor(
    private primeNGConfig: PrimeNGConfig,
    private translateService: TranslateService,
    private googleAnalyticsCustomService: GoogleAnalyticsCustomService,
    private googleApiCustomService: GoogleApiCustomService,
    private scriptLoaderService: ScriptLoaderService
  ) {

    this.googleAnalyticsCustomService.saveView();

    let scriptGoogleApi = {
      name: 'google-api',
      src: 'https://apis.google.com/js/api.js',
      loaded: false,
      async: true,
      defer: true,
      tag: 'body'
    };

    this.scriptLoaderService.load(scriptGoogleApi).subscribe(() => {
      this.googleApiCustomService.handleClientLoad();
    });

  }

  ngOnInit(): void {
    this.translateService.setDefaultLang('es');
    this.translateService.use("es");
    this.translateService.get('primeng').subscribe(res => this.primeNGConfig.setTranslation(res));
  }

}
