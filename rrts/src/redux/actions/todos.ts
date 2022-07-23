import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './todoActionTypes';

export interface TODO {
  id: number;
  title: string;
  completed: boolean;
}

export interface DeleteTodo {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchToddos;
  payload: TODO[];
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get<TODO[]>(url);
    dispatch<FetchTodosAction>({
      type: ActionTypes.fetchToddos,
      payload: res.data,
    });
  };
};

export const deleteTodo = (id: number): DeleteTodo => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};
