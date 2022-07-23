import { UserActionTypes } from './../actions/usersActionTypes';
import { User } from '../actions/users.actions';
import { Action } from '../actions/users.actions';

export const userReducer = (state: User[] = [], action: Action) => {
  switch (action.type) {
    case UserActionTypes.fetchUser:
      return [...state, ...action.payload];

    default:
      return state;
  }
};
