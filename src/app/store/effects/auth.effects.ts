import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, of } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/models/user.model';
import * as authActions from 'src/app/store/actions/auth.action'

@Injectable({providedIn: 'root'})
export class ServiceNameService {

    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) { }
    
    login$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.loginRequest),
        mergeMap(()=> this.authService.login().pipe(
            map(() => authActions.loginSuccess()),
            catchError((error) => of(authActions.loginError({error:error})))
        ))
    ));
}