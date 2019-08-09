import { css } from '@emotion/core'

const scrollbars = ({ theme }) => css`
  ${theme.breakpoints.up('sm')} {
    ::-webkit-scrollbar {
      background: ${theme.palette.scrollbar.track};
    }
    ::-webkit-scrollbar-thumb {
      background: ${theme.palette.scrollbar.thumb};
    }
  }
`

export default scrollbars
