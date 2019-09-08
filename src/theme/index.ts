import createMuiTheme, {
  Theme,
} from '@material-ui/core/styles/createMuiTheme'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'

import borders from './borders'
import overrides from './overrides'
import { dark, light } from './palette'
import radii from './radii'
import shape from './shape'
import sizes from './sizes'
import typography from './typography'

const createTheme = (palette: PaletteOptions): Theme =>
  createMuiTheme({
    borders,
    overrides,
    palette,
    radii,
    shape,
    sizes,
    typography,
  })

export const lightTheme: Theme = createTheme(light)
export const darkTheme: Theme = createTheme(dark)
