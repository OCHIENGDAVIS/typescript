import { ActionTypes } from '../action-types';

export interface SearchRepositoryAction {
  type: ActionTypes.SEARCH_REPOSITORIES;
}

export interface SearchRepositorySucessAction {
  type: ActionTypes.SEARCH_REPOSITORIES_SUCESS;
  payload: string[];
}

export interface SearchRepositoriesErrorAction {
  type: ActionTypes.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoryAction
  | SearchRepositorySucessAction
  | SearchRepositoriesErrorAction;
