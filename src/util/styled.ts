import { Theme } from '@material-ui/core/styles/createMuiTheme'
import * as styledComponents from 'styled-components'

const {
  default: styled,
  css,
  createGlobalStyle,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  Theme
>

export { css, createGlobalStyle, ThemeProvider }

export default styled
