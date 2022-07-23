import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const mildwares = [thunk];

export const store = createStore(reducers, applyMiddleware(...mildwares));
