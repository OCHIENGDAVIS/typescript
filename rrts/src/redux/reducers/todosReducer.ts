import { Action } from './../actions/todoActionTypes';
import { TODO } from '../actions';
import { ActionTypes } from '../actions/todoActionTypes';

export const todosReducer = (state: TODO[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchToddos:
      return [...state, ...action.payload];
    case ActionTypes.deleteTodo:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
