import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const loginRequest = createAction('[Auth] Login request');
export const loginSuccess = createAction('[Auth] Login sucess');
export const loginError = createAction('[Auth] Login error', props<{ error: Error }>());

export const logout = createAction('[Auth] Logout');

export const getAuthUserRequest = createAction('[Auth] Auth user request');
export const getAuthUserSuccess = createAction('[Auth] Auth user sucess', props<{ user: User }>());
export const getAuthUserError = createAction('[Auth] Auth user error', props<{ error: Error }>());

export const refreshTokenRequest = createAction('[Auth] Refresh token request');
export const refreshTokenSuccess = createAction('[Auth] Refresh token success');
export const refreshTokenError = createAction('[Auth] Refresh token error');