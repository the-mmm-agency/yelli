import {
  fade,
  darken,
} from '@material-ui/core/styles/colorManipulator'

const dark = {
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
    scrollbar: {
      thumb: darken('#1e2132', 0.18),
      track: darken('#212337', 0.08),
    },
    text: {
      disabled: '#3c4361',
      primary: '#ffffff',
      secondary: '#777fab',
      placeholder: '#afbeeeaa',
    },
    type: 'dark',
  },
}

export default dark
