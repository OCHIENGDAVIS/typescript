import { Action } from '../actions';
import { ActionTypes } from '../action-types';

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: [],
};

export interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const repositoryReducer = (
  state: RepositoriesState = INITIAL_STATE,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORIES:
      return { ...state, loading: true, error: null, data: [] };
    case ActionTypes.SEARCH_REPOSITORIES_SUCESS:
      return { ...state, loading: false, error: null, data: action.payload };
    case ActionTypes.SEARCH_REPOSITORIES_ERROR:
      return { ...state, loading: false, error: action.payload, data: [] };

    default:
      return state;
  }
};

export default repositoryReducer;
