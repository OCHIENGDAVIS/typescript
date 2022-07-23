import { FetchTodosAction, DeleteTodo } from '.';

export enum ActionTypes {
  fetchToddos,
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodo;
