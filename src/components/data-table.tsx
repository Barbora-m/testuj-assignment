import { useCallback, useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

import { TableData } from '../types';

import { DataTableRow } from './data-table-row';

type Props = {
  data: TableData;
};

export const DataTable = ({ data }: Props) => {
  const [tableData, setTableData] = useState(data);

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const handleRowDelete = useCallback(
    (key: string) => () => {
      setTableData((prevData) =>
        prevData.filter(
          ({ data: rowData }, index) => `${rowData.ID}-${index}` !== key
        )
      );
    },
    []
  );

  return (
    <Table size="small">
      <TableHead sx={{ backgroundColor: 'warning.light' }}>
        <TableRow>
          <TableCell sx={{ fontWeight: 'bold' }} />
          {Object.keys(data[0].data).map((key) => (
            <TableCell key={key} sx={{ fontWeight: 'bold' }}>
              {key}
            </TableCell>
          ))}
          <TableCell sx={{ fontWeight: 'bold' }}>Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tableData.map(({ data: rowData, children }, index) => (
          <DataTableRow
            key={`${rowData.ID}-${index}`}
            data={rowData}
            onDelete={handleRowDelete(`${rowData.ID}-${index}`)}
          >
            {children}
          </DataTableRow>
        ))}
      </TableBody>
    </Table>
  );
};
