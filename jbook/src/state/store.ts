import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import { ActionTypes } from './action-types';

const midlewares = [thunk];

export const store = createStore(reducers, {}, applyMiddleware(...midlewares));

store.dispatch({
  type: ActionTypes.INSERT_CELL_BEFORE,
  payload: {
    id: null,
    type: 'text',
  },
});
store.dispatch({
  type: ActionTypes.INSERT_CELL_BEFORE,
  payload: {
    id: null,
    type: 'code',
  },
});

store.dispatch({
  type: ActionTypes.INSERT_CELL_BEFORE,
  payload: {
    id: null,
    type: 'text',
  },
});
store.dispatch({
  type: ActionTypes.INSERT_CELL_BEFORE,
  payload: {
    id: null,
    type: 'code',
  },
});
