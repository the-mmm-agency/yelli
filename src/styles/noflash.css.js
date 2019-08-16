import { css } from '@emotion/core'

const noflash = ({ palette: { background, text } }) => css`
  body.dark-mode {
    color: ${text.primary};
    background-color: ${background.default};

    .MuiDrawer-paper {
      background-color: ${background.paper};
    }

    .MuiPaper-root:not(.MuiCard-root) {
      color: ${text.primary};
      background-color: ${background.paper};
    }

    .MuiList-root {
      background-color: ${background.paper};
    }

    .MuiTypography-colorTextSecondary {
      color: ${text.secondary};
    }

    .MuiAppBar-root {
      background-color: ${background.paper} !important;
    }
  }
`

export default noflash
