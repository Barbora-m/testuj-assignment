import { Paper } from '@mui/material';

import { DataTable } from '../components';
import { DATA } from '../data';

export const App = () => (
  <Paper
    elevation={15}
    sx={{
      borderRadius: 2,
      margin: '0 auto',
      maxWidth: 1800,
      overflow: 'hidden',
    }}
  >
    <DataTable data={DATA} />
  </Paper>
);
