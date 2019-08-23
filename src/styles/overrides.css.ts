import { Theme } from '@material-ui/core'

import { css } from '@emotion/core'

const overrides = ({
  palette: {
    background: { paper },
    input,
  },
  shadows,
  radii,
}: Theme) => css`
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

  .MuiInput-root.Mui-focused,
  .MuiInputBase-root.Mui-focused {
    background-color: ${input.focus};
    box-shadow: ${shadows[3]};
  }
`

export default overrides
