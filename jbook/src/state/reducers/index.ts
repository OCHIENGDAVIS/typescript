import { combineReducers } from 'redux';
import cellReducer from './cellReducers';

const reducers = combineReducers({
  cells: cellReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>; // some type around react-redux
