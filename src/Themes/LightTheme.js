import { createMuiTheme } from '@material-ui/core/styles';
import { darken, lighten } from '@material-ui/core/styles/colorManipulator';
import teal from '@material-ui/core/colors/teal';

const LightTheme = createMuiTheme({
  palette: {
    background: {
      default: '#f5f5f5',
      paper: '#fafafa'
    },
    contrastThreshold: 3,
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
    tonalOffset: 0.2
  },
  shape: {
    borderRadius: 8
  },
  typography: {
    fontFamily: '"Lato", "Arial", sans-serif',
    fontSize: 16
  }
});

export default LightTheme;
