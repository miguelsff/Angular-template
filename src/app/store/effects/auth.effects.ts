import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, of } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { User } from 'src/app/models/user.model';
import * as authActions from 'src/app/store/actions/auth.action'

@Injectable({ providedIn: 'root' })
export class ServiceNameService {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private tokenStorageService: TokenStorageService
    ) { }

    login$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.loginRequest),
        mergeMap(() => this.authService.login().pipe(
            map(() => { 
                this.tokenStorageService.saveTokens('data.access_token', 'data.refresh_token');
                return authActions.loginSuccess();
            }),
            catchError((error) => of(authActions.loginError({ error: error })))
        ))
    ));
}