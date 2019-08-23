import { PaletteOptions } from '@material-ui/core/styles/createPalette'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

import { dark } from './palette'
import { light } from './palette'

import borders from './borders'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import overrides from './overrides'
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

export const lightTheme = createTheme(light)
export const darkTheme = createTheme(dark)
