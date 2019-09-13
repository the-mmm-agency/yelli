import { darkTheme } from 'src/theme'
import { createGlobalStyle } from 'src/util/styled'

const {
  palette: { background, text },
} = darkTheme

const noflash = createGlobalStyle`
  body.dark-mode {
    color: ${text.primary};
    background-color: ${background.default};

    .MuiDrawer-paper {
      background-color: ${background.paper};
    }

    .MuiPaper-root:not(.MuiCard-root):not(.MuiSnackbarContent-root) {
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
