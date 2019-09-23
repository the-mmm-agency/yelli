import {
  darken,
  fade,
} from '@material-ui/core/styles/colorManipulator'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'

const light: PaletteOptions = {
  background: {
    darker: '#F4F6F8',
    darkest: '#F4F6F8',
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
    alt: '#5a6270',
    disabled: '#aaaaaa',
    placeholder: '#090c17',
    primary: '#161a2a',
    secondary: '#5a6270',
  },
}

export default light
