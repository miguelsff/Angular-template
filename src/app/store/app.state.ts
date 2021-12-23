import { ActionReducerMap } from '@ngrx/store';

import { User } from "../models/user.model";
import * as authReducer from '../store/reducers/auth.reducer';


export interface AppState {
    user: User
}

export const appReducer: ActionReducerMap<AppState> = {
    user: authReducer.login
}