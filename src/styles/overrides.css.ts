import { css } from 'src/util/styled'
import {
  palette,
  pxToRem,
  radii,
  spacing,
} from 'src/util/theme'

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
  .MuiFormControl-root {
    width: 100%;
    margin: ${spacing(1.5, 1)};
  }
  .MuiFormHelperText-contained {
    margin: ${spacing(1, 0, 0)};
    color: ${palette('text.alt')};
    font-size: ${pxToRem(14)};
    line-height: inherit;
  }
  .MuiOutlinedInput-root {
    background-color: ${palette('background.darkest')};
    ${radii('light')};
  }
  .MuiInputLabel-outlined {
    color: ${palette('placeholder')};
  }
  .MuiOutlinedInput-notchedOutline {
    ${radii('light')};
    border-color: ${palette('border')};
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
