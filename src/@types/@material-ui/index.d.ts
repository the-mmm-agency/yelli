import { Theme } from '@material-ui/core/styles/createMuiTheme'
import {
  Palette,
  PaletteOptions,
  TypeText,
} from '@material-ui/core/styles/createPalette'

declare module '@material-ui/core/styles/createPalette' {
  interface TypeValidation {
    warning: string
    error: string
    success: string
    info: string
  }
  interface TypeText {
    alt?: string
    placeholder?: string
  }
  export interface TypeBackground {
    darker: string
    darkest: string
  }
  export interface TypeScrollbar {
    thumb: string
    track: string
  }
  export interface PaletteModes {
    [k: string]: Partial<Omit<PaletteOptions, 'modes'>>
  }
  interface Palette {
    border: string
    scrollbar: TypeScrollbar
    validation: TypeValidation
  }
  interface PaletteOptions {
    border?: string
    validation?: TypeValidation
    modes?: PaletteModes
    scrollbar?: Partial<TypeScrollbar>
  }
}

declare module '@material-ui/core/styles/createMuiTheme' {
  export interface Borders {
    standard: any
  }
  export interface Radii {
    light: number | string
    default: number | string
    heavy: number | string
  }
  export interface Sizes {
    sideDrawer: number | string
  }
  interface ThemeOptions {
    borders: Borders
    radii: Radii
    sizes: Sizes
  }
  interface Theme {
    borders: Borders
    radii: Radii
    sizes: Sizes
  }
}
