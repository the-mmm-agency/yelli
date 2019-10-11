import { Theme } from '@material-ui/core/styles/createMuiTheme'
import {
  Palette,
  PaletteOptions,
  TypeText,
} from '@material-ui/core/styles/createPalette'

declare module '@material-ui/core/useMediaQuery' {
  export default function useMediaQuery(
    query: string | ((theme: Theme) => string),
    options?: Options
  ): boolean
}

declare module '@material-ui/core/styles/createPalette' {
  export type SnackbarVariant =
    | 'default'
    | 'success'
    | 'info'
    | 'warning'
    | 'error'
  export type Validation = Record<
    string,
    Omit<'default', SnackbarVariant>
  >
  export interface TypeText {
    alt: string
    placeholder: string
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
  interface PaletteOptions extends Partial<Palette> {
    modes?: PaletteModes
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
