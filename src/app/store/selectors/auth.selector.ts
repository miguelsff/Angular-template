import { createSelector } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { AppState } from '../app.state';

export const selectedState = (state: AppState) => state.user;

export const selectUser = createSelector(selectedState, (selected: User) => {
    return selected;
});