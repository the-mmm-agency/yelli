import {
  darken,
  lighten,
} from '@material-ui/core/styles/colorManipulator'
import {
  PaletteColorOptions,
  PaletteOptions,
} from '@material-ui/core/styles/createPalette'

import { darkMode, lightMode } from './modes'

const augmentFactor = 0.12

const createPaletteColor = (
  color: string
): PaletteColorOptions => ({
  dark: darken(color, augmentFactor),
  light: lighten(color, augmentFactor),
  main: color,
})

const base: PaletteOptions = {
  primary: createPaletteColor('#ff5370'),
  secondary: createPaletteColor('#39c5ff'),
  validation: {
    error: '#ff5370',
    info: '#6796e6',
    success: '#77e0c6',
    warning: '#deb86e',
  },
}

const createPalette = (
  mode: PaletteOptions
): PaletteOptions => ({ ...base, ...mode })

export const light = createPalette(lightMode)
export const dark = createPalette(darkMode)
