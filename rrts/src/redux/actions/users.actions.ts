import { Dispatch } from 'redux';
import axios from 'axios';
import { UserActionTypes } from './usersActionTypes';

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface FetchUserAction {
  type: UserActionTypes.fetchUser;
  payload: User[];
}

export const fetchUser = (url: string) => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get<User[]>(url);
    dispatch<FetchUserAction>({
      type: UserActionTypes.fetchUser,
      payload: res.data,
    });
  };
};

export type Action = FetchUserAction;
