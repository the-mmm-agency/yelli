import {
  fade,
  darken,
  lighten,
} from '@material-ui/core/styles/colorManipulator'

const DarkTheme = {
  palette: {
    background: {
      default: '#212337',
      paper: '#1e2132',
    },
    divider: fade('#121523', 0.6),
    input: {
      default: '#191a2a',
      hover: darken('#191a2a', 0.12),
      focus: darken('#191a2a', 0.2),
    },
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
    scrollbar: {
      thumb: darken('#1e2132', 0.12),
      track: darken('#212337', 0.08),
    },
    text: {
      disabled: '#3c4361',
      primary: '#ffffff',
      secondary: '#777fab',
      placeholder: '#afbeeeaa',
    },
    tonalOffset: 0.2,
    type: 'dark',
  },
}

export default DarkTheme
