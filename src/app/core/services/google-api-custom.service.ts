import { Injectable } from '@angular/core';
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

  constructor() { }

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
      console.log(this.googleAuth.currentUser.get())
      this.makeApiCall();
    } else {
      console.log('NO LOGEADO');
    }
  }

  makeApiCall() {
    /*gapi.client.people.people.get({
      'resourceName': 'people/me',
      'requestMask.includeField': 'person.names'
    }).then(function (resp: any) {
      console.log(resp)
    });*/
  }

}

