import { createMuiTheme } from '@material-ui/core/styles';
import { darken, lighten } from '@material-ui/core/styles/colorManipulator';
import teal from '@material-ui/core/colors/teal';

const LightTheme = createMuiTheme({
  palette: {
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
    tonalOffset: 0.2,
    type: 'dark'
  },
  typography: {
    fontFamily: '"Pragati Narrow", "Arial", sans-serif',
    fontSize: 14
  }
});

export default LightTheme;
