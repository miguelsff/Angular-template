import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';

import { environment } from 'src/environments/environment';

declare let gtag: Function;

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
    private router: Router
  ) {

    if (environment.production) {
      const navEvents = this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ) as Observable<NavigationEnd>;

      navEvents.subscribe(event => {
        gtag('config', environment.idGoogleAnalitics, {
          'page_path': event.urlAfterRedirects
        });
      })
    }

  }

  ngOnInit(): void {
    this.translateService.setDefaultLang('es');
    this.translateService.use("es");
    this.translateService.get('primeng').subscribe(res => this.primeNGConfig.setTranslation(res));
  }

}
