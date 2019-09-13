import { css } from 'src/util/styled'
import { palette, radii } from 'src/util/theme'

const overrides = css`
  .MuiList-root {
    background-color: ${palette('background.paper')};
  }
  .MuiSnackbarContent-root {
    &.success {
      background-color: ${palette('validation.success')};
    }
    &.warning {
      background-color: ${palette('validation.warning')};
    }
    &.info {
      background-color: ${palette('validation.info')};
    }
    &.error {
      background-color: ${palette('validation.error')};
    }
  }
  .MuiCardActionArea-root {
    ${radii('default')}
  }
  .MuiAppBar-root {
    background-color: ${palette('background.paper')};
  }
  .MuiSelect-icon {
    color: ${palette('text.alt')};
  }
  .MuiCardContent-root {
    & > * {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .MuiOutlinedInput-notchedOutline {
    border-width: 2px;
    ${radii('light')};
    border-color: ${palette('divider')};
  }
  .MuiOutlinedInput-root:hover:not(.Mui-focused)
    .MuiOutlinedInput-notchedOutline {
    border-color: ${palette('divider')} !important;
  }
  .MuiBottomNavigationAction-root {
    svg {
      font-size: 1.7rem;
    }
  }
`

export default overrides
