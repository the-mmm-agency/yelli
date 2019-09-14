import {
  darken,
  fade,
} from '@material-ui/core/styles/colorManipulator'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'

const light: PaletteOptions = {
  background: {
    darker: '#f4f4f7',
    darkest: darken('#f4f4f7', 0.06),
    default: '#fbfcfd',
    paper: '#ffffff',
  },
  border: fade('#000', 0.2),
  divider: fade('#202124', 0.1),
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
