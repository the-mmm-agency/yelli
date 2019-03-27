import { createMuiTheme } from '@material-ui/core/styles';
import { darken, lighten } from '@material-ui/core/styles/colorManipulator';
import teal from '@material-ui/core/colors/teal';

const LightTheme = createMuiTheme({
  palette: {
    background: {
      default: '#ffffff',
      paper: '#ffffff'
    },
    contrastThreshold: 3,
    divider: '#ececec',
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
      secondary: '#80868b'
    },
    tonalOffset: 0.2
  },
  shape: {
    borderRadius: 8
  },
  typography: {
    fontSize: 14
  }
});

export default LightTheme;
