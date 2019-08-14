import { css } from '@emotion/core'

const noflash = theme => css`
  body.dark-mode {
    background-color: ${theme.palette.background.default};
    color: ${theme.palette.text.primary};
    .MuiDrawer-paper {
      background-color: ${theme.palette.background.paper};
    }
    .MuiPaper-root:not(.MuiCard-root) {
      color: ${theme.palette.text.primary};
      background-color: ${theme.palette.background.paper};
    }
    .MuiList-root {
      background-color: ${theme.palette.background.paper};
    }
    .MuiTypography-colorTextSecondary {
      color: ${theme.palette.text.secondary};
    }
    .MuiAppBar-root {
      background-color: ${theme.palette.background.paper} !important;
    }
  }
`

export default noflash
