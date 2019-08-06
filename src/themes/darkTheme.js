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
    scrollbar: darken('#1e2132', 0.2),
    text: {
      disabled: '#3c4361',
      primary: '#ffffff',
      secondary: '#a2a6bf',
    },
    tonalOffset: 0.2,
    type: 'dark',
  },
}

export default DarkTheme
