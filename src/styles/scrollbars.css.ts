import { Theme } from '@material-ui/core/styles/createMuiTheme'

import { css } from '@emotion/core'
import { darken } from '@material-ui/core/styles/colorManipulator'

const scrollbars = ({
  palette: {
    scrollbar: { thumb, track },
  },
  breakpoints: { up },
}: Theme) => css`
  ${up('sm')} {
    ::-webkit-scrollbar {
      background: ${track};
    }

    ::-webkit-scrollbar-thumb {
      &:hover {
        background: ${darken(thumb, 0.18)};
      }
      background: ${thumb};
    }

    html {
      scrollbar-color: ${thumb} ${track};
      scrollbar-width: thin;
    }
  }
`

export default scrollbars
