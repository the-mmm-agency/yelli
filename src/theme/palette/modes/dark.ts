import {
  darken,
  fade,
} from '@material-ui/core/styles/colorManipulator'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'

const dark: PaletteOptions = {
  action: {
    hover: '#7c85b320',
    selected: '#717cb450',
  },
  background: {
    darker: '#1b1d2c',
    darkest: '#191a2a',
    default: '#212337',
    paper: '#1e2132',
  },
  border: fade('#000', 0.4),
  divider: fade('#121523', 0.6),
  scrollbar: {
    thumb: darken('#1e2132', 0.18),
    track: darken('#212337', 0.08),
  },
  text: {
    alt: '#7c85b3',
    disabled: '#3c4361',
    placeholder: '#afbeeeaa',
    primary: '#ffffff',
    secondary: '#777fab',
  },
  type: 'dark',
}

export default dark
