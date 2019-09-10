import { SerializedStyles, css } from '@emotion/core'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

const globalStyle = ({
  palette: { background, primary, text },
  transitions,
}: Theme): SerializedStyles => css`
  * {
    @media (prefers-reduced-motion: reduce) {
      transition: none !important;
      animation: none !important;
    }
  }

  html {
    overflow-y: scroll;
    text-rendering: geometricPrecision;
  }

  html > * {
    overflow-y: hidden;
  }

  html,
  body {
    height: auto;
    overflow-x: hidden;
  }

  body {
    background-color: ${background.default};
    transition: ${transitions.create([
      'color',
      'background-color',
    ])};
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }

  ul {
    list-style: none;
  }

  ::selection {
    color: white;
    background: ${primary.main};
  }

  ::placeholder {
    color: ${text.placeholder} !important;
  }
`

export default globalStyle
