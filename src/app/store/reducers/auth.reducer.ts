import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import * as authAction from '../actions/auth.action';

let initialState = new User();

const _login = createReducer(initialState,
    on(authAction.loginRequest, state => ({
        ...state
    })),
    on(authAction.loginSuccess, state => ({
        ...state
    })),
    on(authAction.loginError, (state, { error }) => ({
        ...state,
        error: { ...error }
    }))
);

export function login(state: User | undefined, action: Action) {
    return _login(state, action);
}