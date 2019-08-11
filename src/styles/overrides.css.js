import { css } from '@emotion/core'

const overrides = ({ theme }) => css`
  .MuiList-root {
    background-color: ${theme.palette.background.paper};
    width: 100%;
  }
  .MuiAppBar-root {
    background-color: ${theme.palette.background.paper};
    box-shadow: none;
  }
  .MuiButton-text .MuiButton-label {
    font-weight: 600;
  }
  .MuiCard-root {
    box-shadow: none;
    background: transparent;
  }
  .MuiBottomNavigation-root {
    height: 68px;
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
  .MuiInput-root.Mui-focused,
  .MuiInputBase-root.Mui-focused {
    background-color: ${theme.palette.input.focus};
    box-shadow: ${theme.shadows[3]};
  }
  .MuiBottomNavigationAction-label.Mui-selected {
    font-weight: 600;
  }
`

export default overrides
