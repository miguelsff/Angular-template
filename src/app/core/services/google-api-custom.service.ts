import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GoogleApiCustomService {

  private apiKey: string = environment.googleApiKey;
  private clientId: string = environment.googleClientId;
  private discoveryDocs: Array<string> = ["https://people.googleapis.com/$discovery/rest?version=v1"];
  private scope: string = 'profile';

  private googleAuth!: gapi.auth2.GoogleAuth;

  constructor(private httpClient: HttpClient) { }

  handleClientLoad() {
    let $this = this;
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey: this.apiKey,
        discoveryDocs: this.discoveryDocs,
        clientId: this.clientId,
        scope: this.scope
      }).then(function () {
        $this.googleAuth = gapi.auth2.getAuthInstance();
        $this.googleAuth.isSignedIn.listen($this.updateSigninStatus);
        $this.updateSigninStatus($this.googleAuth.isSignedIn.get());
      });
    });
  }

  handleAuthClick() {
    this.googleAuth.signIn();
  }

  handleSignoutClick() {
    this.googleAuth.signOut();
  }

  updateSigninStatus(isSignedIn: any) {
    if (isSignedIn) {
      console.log('LOGEADO');
      console.log(this.googleAuth.currentUser.get());
    } else {
      console.log('NO LOGEADO');
    }
  }

  getAssetsDataStudio() {
    return this.httpClient.get(`https://datastudio.googleapis.com/v1/assets:search`, {
    }).pipe(
      map((result: any) => result)
    );
  }

  getPermissionsDataStudio() {
    return this.httpClient.get(`https://datastudio.googleapis.com/v1/assets/{ASSET_ID}/permissions`, {
    }).pipe(
      map((result: any) => result)
    );
  }

}

