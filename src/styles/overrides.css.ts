import { SerializedStyles, css } from '@emotion/core'
import { Theme } from '@material-ui/core'

const overrides = ({
  palette: {
    background: { paper, darker, darkest },
  },
  radii,
}: Theme): SerializedStyles => css`
  .MuiList-root {
    background-color: ${paper};
  }

  .MuiCardActionArea-root {
    border-radius: ${radii.default}px;
  }

  .MuiAppBar-root {
    background-color: ${paper};
  }

  .MuiCardContent-root {
    & > * {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .MuiOutlinedInput-root:hover
    .MuiOutlinedInput-notchedOutline {
    border-color: ${darker};
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: ${darkest};
    border-radius: ${radii.input}px;
  }

  .MuiBottomNavigationAction-root {
    svg {
      font-size: 1.7rem;
    }
  }
`

export default overrides
