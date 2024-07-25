import { ThemeProvider, StyledEngineProvider, createTheme } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import Router from './routes/router';
import { GlobalStyles } from './styles/GlobalStyles';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#04bf8a',
        light: '#41CAA3',
        dark: '#038C65',
        contrastText: '#fffefc',
      },
      background: {
        default: '#172632',
        paper: '#1D2D44',
      },
    },
    typography: {
      allVariants: {
        color: '#fffefc',
      },
    },
    components: {
      MuiTextField: {
        defaultProps: {
          variant: 'filled',
          size: 'small',
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
        defaultProps: {
          variant: 'contained',
          size: 'medium',
        },
      },
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          autoHideDuration={2000}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <GlobalStyles />
            <Router />
          </LocalizationProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
