import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: '20px' }}>
        <Button variant="contained" color="primary">
          Themed Button
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;