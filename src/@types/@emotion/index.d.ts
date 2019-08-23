import { CreateStyled } from '@emotion/styled'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

declare module '@emotion/styled' {
  export const styled: CreateStyled<Theme>
}
