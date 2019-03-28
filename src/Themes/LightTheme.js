import { createMuiTheme } from '@material-ui/core/styles';
import {
  darken,
  lighten,
  fade
} from '@material-ui/core/styles/colorManipulator';
import teal from '@material-ui/core/colors/teal';

const LightTheme = createMuiTheme({
  palette: {
    background: {
      default: '#ffffff',
      paper: '#ffffff'
    },
    contrastThreshold: 3,
    divider: '#dadce0',
    primary: {
      dark: darken('#ea533f', 0.12),
      light: lighten('#ea533f', 0.12),
      main: '#ea533f'
    },
    secondary: {
      dark: teal[900],
      light: teal[500],
      main: teal[700]
    },
    text: {
      primary: '#202124',
      secondary: fade('#202124', 0.7)
    },
    tonalOffset: 0.2
  },
  shape: {
    borderRadius: 8
  },
  typography: {
    fontFamily: 'proxima-nova, sans-serif',
    fontSize: 14
  }
});

export default LightTheme;
