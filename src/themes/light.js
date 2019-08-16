import {
  darken,
  fade,
} from '@material-ui/core/styles/colorManipulator'

const light = {
  palette: {
    border: '#dadce0',
    background: {
      default: '#fbfcfd',
      paper: '#ffffff',
    },
    divider: fade('#202124', 0.1),
    input: {
      default: '#f4f4f7',
      hover: darken('#f4f4f7', 0.06),
      focus: darken('#f4f4f7', 0.08),
    },
    scrollbar: {
      thumb: darken('#fbfcfd', 0.12),
      track: darken('#fbfcfd', 0.05),
    },
    text: {
      primary: '#161a2a',
      secondary: fade('#161a2a', 0.5),
      placeholder: '#090c17',
    },
  },
}

export default light
