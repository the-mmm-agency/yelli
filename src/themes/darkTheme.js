import {
  fade,
  darken,
  lighten,
} from '@material-ui/core/styles/colorManipulator'

const DarkTheme = {
  palette: {
    border: lighten('#2a2e48', 0.12),
    background: {
      default: '#212337',
      paper: '#1e2132',
    },
    divider: fade('#121523', 0.6),
    primary: {
      dark: darken('#ff5370', 0.12),
      light: lighten('#ff5370', 0.12),
      main: '#ff5370',
    },
    secondary: {
      dark: lighten('#89ddff', 0.12),
      light: lighten('#89ddff', 0.12),
      main: '#89ddff',
    },
    text: {
      disabled: '#3c4361',
      primary: '#ffffff',
      secondary: '#a2a6bf',
    },
    tonalOffset: 0.2,
    type: 'dark',
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily:
      'proxima-nova, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontSize: 14,
    h6: {
      fontWeight: 600,
    },
  },
}

export default DarkTheme
