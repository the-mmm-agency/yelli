import {
  darken,
  lighten,
  fade
} from '@material-ui/core/styles/colorManipulator';

const LightTheme = {
  palette: {
    background: {
      default: '#ffffff',
      paper: '#ffffff'
    },
    contrastThreshold: 3,
    divider: fade('#202124', 0.1),
    primary: {
      dark: darken('#ff5370', 0.12),
      light: lighten('#ff5370', 0.12),
      main: '#ff5370'
    },
    secondary: {
      dark: lighten('#89ddff', 0.12),
      light: lighten('#89ddff', 0.12),
      main: '#89ddff'
    },
    text: {
      primary: '#202124',
      secondary: fade('#202124', 0.4)
    },
    tonalOffset: 0.2
  },
  shape: {
    borderRadius: 8
  },
  typography: {
    fontFamily:
      'proxima-nova, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontSize: 14,
    h6: {
      fontWeight: 600
    }
  }
};

export default LightTheme;
