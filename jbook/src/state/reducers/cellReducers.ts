import produce from 'immer';
import { Cell } from './../cell';
import { ActionTypes } from '../action-types';
import { Action } from '../actions';

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell;
  };
}

const INITIAL_STATE: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

const cellReducer = produce((state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_CELL:
      const { id, content } = action.payload;
      state.data[id].content = content;
      return state;

    case ActionTypes.DELETE_CELL:
      delete state.data['action.payload'];
      state.order = state.order.filter((id: string) => id !== action.payload);
      return state;
    case ActionTypes.MOVE_CELL:
      const { direction } = action.payload;
      const index = state.order.findIndex(
        (id: string) => id === action.payload.id
      );
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex > state.order.length - 1) {
        return state;
      }
      state.order[index] = state.order[targetIndex];
      state.order[targetIndex] = action.payload.id;
      return state;
    case ActionTypes.INSERT_CELL_BEFORE:
      const cell: Cell = {
        content: '',
        type: action.payload.type,
        id: Math.random().toString(36).substring(2, 5),
      };
      state.data[cell.id] = cell;
      const foundInex = state.order.findIndex(
        (id: string) => id === action.payload.id
      );
      if (foundInex < 0) {
        state.order.push(cell.id);
      } else {
        state.order.splice(foundInex, 0, cell.id);
      }
      return state;
    default:
      return state;
  }
});

export default cellReducer;
