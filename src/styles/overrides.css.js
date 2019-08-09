import { css } from '@emotion/core'

const overrides = ({ theme }) => css`
  .MuiAppBar-root {
    background-color: ${theme.palette.background.paper};
  }
  .MuiAppBar-root,
  .MuiCard-root {
    box-shadow: none;
  }
  .MuiCardContent-root {
    & > * {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    padding: ${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(1)};
  }
  .MuiBottomNavigationAction-root {
    svg {
      font-size: 1.7rem;
    }
  }
  .MuiList-root {
    width: 100%;
  }
  .MuiBottomNavigationAction-label.Mui-selected {
    font-weight: 600;
  }
`

export default overrides
