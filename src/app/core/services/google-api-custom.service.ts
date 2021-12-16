import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'

declare let gapi: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleApiCustomService {

  private apiKey: String = environment.googleApiKey;
  private clientId: String = environment.googleClientId;
  private discoveryDocs: Array<String> = ["https://people.googleapis.com/$discovery/rest?version=v1"];
  private scope: String = 'profile';

  constructor() { }

  handleClientLoad() {
    // Load the API client and auth2 library
    gapi.load('client:auth2', this.initClient);
    
  }

  initClient() {

    let $this = new GoogleApiCustomService();
    gapi.client.init({
      apiKey: $this.apiKey,
      discoveryDocs: $this.discoveryDocs,
      clientId: $this.clientId,
      scope: $this.scope
    }).then(function () {
      // Listen for sign-in state changes.
      gapi.auth2.getAuthInstance().isSignedIn.listen($this.updateSigninStatus);
      // Handle the initial sign-in state.
      $this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
  }

  handleAuthClick() {
    gapi.auth2.getAuthInstance().signIn();
  }

  handleSignoutClick() {
    gapi.auth2.getAuthInstance().signOut();
  }

  updateSigninStatus(isSignedIn: any) {
    if (isSignedIn) {
      console.log('LOGEADO');
      this.makeApiCall();
    } else {
      console.log('NO LOGEADO');
    }
  }
  
  makeApiCall() {
    gapi.client.people.people.get({
      'resourceName': 'people/me',
      'requestMask.includeField': 'person.names'
    }).then(function (resp: any) {
      console.log(resp)
    });
  }

}

