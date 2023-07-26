import { useCallback, useState } from 'react';
import { Collapse, IconButton, TableCell, TableRow } from '@mui/material';
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  Delete,
} from '@mui/icons-material';

import { TableRowProps } from '../types';

import { DataTable } from './data-table';

type Props = TableRowProps & {
  onDelete: VoidFunction;
};

export const DataTableRow = ({ children, data, onDelete }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = useCallback(
    () => setIsExpanded((prevIsExpanded) => !prevIsExpanded),
    []
  );

  return (
    <>
      <TableRow>
        {Object.keys(children).length > 0 ? (
          <TableCell>
            <IconButton onClick={handleExpandClick}>
              {isExpanded ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </TableCell>
        ) : (
          <TableCell />
        )}
        {Object.values(data).map((value) => (
          <TableCell key={value}>{value}</TableCell>
        ))}
        <TableCell>
          <IconButton onClick={onDelete}>
            <Delete />
          </IconButton>
        </TableCell>
      </TableRow>
      {Object.values(children).map(({ records }, index) => (
        <TableRow key={`children-row-${index}`}>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={100}>
            <Collapse in={isExpanded}>
              <div style={{ padding: '20px' }}>
                <DataTable data={records} />
              </div>
            </Collapse>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
};
