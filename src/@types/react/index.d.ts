import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { CSSProp } from 'styled-components'

declare module 'react' {
  interface Attributes {
    css?: CSSProp<Theme>
  }
}
