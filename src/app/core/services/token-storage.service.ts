import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private accessTokenKey: string;
  private refreshTokenKey: string;

  constructor(private localStorageService: LocalStorageService) {
    this.accessTokenKey = '';
    this.refreshTokenKey = '';
  }

  getAccessToken(): string {
    return this.localStorageService.getItem(this.accessTokenKey) as string;
  }

  saveAccessToken(token: string) {
    this.localStorageService.setItem(this.accessTokenKey, token);
  }

  getRefreshToken(): string {
    return this.localStorageService.getItem(this.refreshTokenKey) as string;
  }

  saveRefreshToken(token: string) {
    this.localStorageService.setItem(this.refreshTokenKey, token);
  }

  saveTokens(accessToken: string, refreshToken: string) {
    this.saveAccessToken(accessToken);
    this.saveRefreshToken(refreshToken);
  }

  removeTokens() {
    this.localStorageService.removeItem(this.accessTokenKey);
    this.localStorageService.removeItem(this.refreshTokenKey);
  }
}
