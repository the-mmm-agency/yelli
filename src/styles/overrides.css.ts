import { SerializedStyles, css } from '@emotion/core'
import { Theme } from '@material-ui/core'

const overrides = ({
  palette: {
    background: { paper },
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

  .MuiBottomNavigationAction-root {
    svg {
      font-size: 1.7rem;
    }
  }
`

export default overrides
