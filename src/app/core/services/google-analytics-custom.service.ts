// https://www.dottedsquirrel.com/google-analytics-angular/
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { environment } from '../../../environments/environment'

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsCustomService {

  constructor(private router: Router) { }

  public saveEvent(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string,
    eventValue: number) {

    if (environment.production) {
      gtag('event', eventName, {
        eventCategory: eventCategory,
        eventLabel: eventLabel,
        eventAction: eventAction,
        eventValue: eventValue
      });
    }

  }

  public saveView() {
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

}
