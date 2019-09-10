import {
  darken,
  fade,
} from '@material-ui/core/styles/colorManipulator'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'

const light: PaletteOptions = {
  background: {
    darker: fade('#000', 0.03),
    darkest: fade('#000', 0.08),
    default: '#fbfcfd',
    paper: '#ffffff',
  },
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
    alt: fade('#1b1d2c', 0.5),
    placeholder: '#090c17',
    primary: '#161a2a',
    secondary: fade('#161a2a', 0.5),
  },
}

export default light
