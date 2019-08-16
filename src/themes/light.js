import {
  darken,
  fade,
} from '@material-ui/core/styles/colorManipulator'

const light = {
  palette: {
    background: {
      default: '#fbfcfd',
      paper: '#ffffff',
    },
    border: '#dadce0',
    divider: fade('#202124', 0.1),
    input: {
      default: '#f4f4f7',
      focus: darken('#f4f4f7', 0.08),
      hover: darken('#f4f4f7', 0.06),
    },
    scrollbar: {
      thumb: darken('#fbfcfd', 0.12),
      track: darken('#fbfcfd', 0.05),
    },
    text: {
      placeholder: '#090c17',
      primary: '#161a2a',
      secondary: fade('#161a2a', 0.5),
    },
  },
}

export default light
