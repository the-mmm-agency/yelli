import { css } from '@emotion/core'
import { darken } from '@material-ui/core/styles/colorManipulator'

const scrollbars = theme => css`
  ${theme.breakpoints.up('sm')} {
    ::-webkit-scrollbar {
      background: ${theme.palette.scrollbar.track};
    }
    ::-webkit-scrollbar-thumb {
      &:hover {
        background: ${darken(theme.palette.scrollbar.thumb, 0.18)};
      }
      background: ${theme.palette.scrollbar.thumb};
    }
    html {
      scrollbar-color: ${theme.palette.scrollbar.thumb}
        ${theme.palette.scrollbar.track};
      scrollbar-width: thin;
    }
  }
`

export default scrollbars
