import { Cell } from '../state';
import CodeCell from './code-cell';
import TextEitor from './text-editor';
import ActionBar from './action-bar';

import './cell-list-item.css';

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === 'code') {
    child = (
      <>
        <div className="action-bar-wrapper">
          <ActionBar id={cell.id} />
          <CodeCell cell={cell} />
        </div>
      </>
    );
  } else {
    child = (
      <>
        <div className="">
          <ActionBar id={cell.id} />
          <TextEitor cell={cell} />
        </div>
      </>
    );
  }
  return <div className="cell-list-item">{child}</div>;
};
export default CellListItem;
