import {
  darken,
  fade,
} from '@material-ui/core/styles/colorManipulator'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'

const dark: PaletteOptions = {
  background: {
    default: '#212337',
    paper: '#1e2132',
  },
  divider: fade('#121523', 0.6),
  input: {
    default: '#191a2a',
    focus: darken('#191a2a', 0.2),
    hover: darken('#191a2a', 0.12),
  },
  scrollbar: {
    thumb: darken('#1e2132', 0.18),
    track: darken('#212337', 0.08),
  },
  text: {
    disabled: '#3c4361',
    placeholder: '#afbeeeaa',
    primary: '#ffffff',
    secondary: '#777fab',
  },
  type: 'dark',
}

export default dark
