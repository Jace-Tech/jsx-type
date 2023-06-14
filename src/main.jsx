import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { PRIMARY_COLOR, SECONDARY_COLOR } from './utils/colors';

import './index.css'
import "./assets/fonts/css/general-sans.css"
import 'animate.css';


export const themeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
  },
  typography: {
    fontFamily: "GeneralSans, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
  }
};

const theme = createTheme(themeOptions)

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
)
