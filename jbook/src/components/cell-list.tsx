import { Fragment } from 'react';
import { useTypedSelector } from '../hooks/use-typed-selector';
import CellListItem from './ cell-list-item';
import { Cell } from '../state';
import AddCell from './add-cell';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => {
    return order.map((id: string) => {
      return data[id];
    });
  });
  const renderedCells = cells.map((cell: Cell) => (
    <Fragment key={cell.id}>
      <AddCell nextCellId={cell.id} />
      <CellListItem cell={cell} />
    </Fragment>
  ));
  return (
    <div>
      {renderedCells}
      <div className={cells.length === 0 ? 'force-vissible' : ''}>
        <AddCell nextCellId={null} />
      </div>
    </div>
  );
};
export default CellList;
