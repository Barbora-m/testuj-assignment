export type RowData = {
  ID: string;
  [key: string]: string;
};

type ChildValue = { records: Array<TableRowProps> };
export type RowChildren = Record<string, ChildValue>;

export type TableRowProps = {
  children: RowChildren;
  data: RowData;
};

export type TableData = Array<TableRowProps>;
