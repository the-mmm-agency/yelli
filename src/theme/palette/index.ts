import { PaletteColorOptions } from '@material-ui/core/styles/createPalette'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'

import { darken } from '@material-ui/core/styles/colorManipulator'
import { darkMode } from './modes'
import { lighten } from '@material-ui/core/styles/colorManipulator'
import { lightMode } from './modes'

const augmentFactor = 0.12

const createPaletteColor = (
  color: string
): PaletteColorOptions => ({
  main: color,
  dark: darken(color, augmentFactor),
  light: lighten(color, augmentFactor),
})

const base: PaletteOptions = {
  primary: createPaletteColor('#ff5370'),
  secondary: createPaletteColor('#89ddff'),
}

const createPalette = (
  mode: PaletteOptions
): PaletteOptions => ({ ...base, ...mode })

export const light = createPalette(lightMode)
export const dark = createPalette(darkMode)
