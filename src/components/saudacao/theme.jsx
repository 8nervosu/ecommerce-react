// theme.jsx
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#190f73', // Cor primária
    },
    secondary: {
      main: '#a85ae9', // Cor secundária
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
    },
  },
});

export default theme;