import { combineReducers } from 'redux';
import { todosReducer } from './todosReducer';
import { userReducer } from './user.reducer';
import { TODO } from './../actions/index';
import { User } from '../actions/users.actions';

export interface StoreState {
  todos: TODO[];
  users: User[];
}

const reducers = combineReducers<StoreState>({
  todos: todosReducer,
  users: userReducer,
});

export default reducers;
