import { Cell, CellTypes } from './../cell';
import { ActionTypes } from '../action-types';

export type Direction = 'up' | 'down';

export interface MoveCellAction {
  type: ActionTypes.MOVE_CELL;
  payload: {
    id: string;
    direction: Direction;
  };
}

export interface DeletCellAction {
  type: ActionTypes.DELETE_CELL;
  payload: string;
}
export interface InsertCellBeforeAction {
  type: ActionTypes.INSERT_CELL_BEFORE;
  payload: {
    id: string | null;
    type: CellTypes;
  };
}

export interface UpdateCellAction {
  type: ActionTypes.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  };
}

export type Action =
  | MoveCellAction
  | DeletCellAction
  | InsertCellBeforeAction
  | UpdateCellAction;
