import { css } from '@emotion/core'

const globalStyle = theme => css`
  * {
    @media (prefers-reduced-motion: reduce) {
      animation: none !important;
      transition: none !important;
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
    overflow-x: hidden;
    height: auto;
  }
  body {
    transition: ${theme.transitions.create(['color', 'background-color'])};
    background-color: ${theme.palette.background.default};
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -webkit-user-select: auto;
  }
  ul {
    list-style: none;
  }
  ::selection {
    background: ${theme.palette.primary.main};
    color: white;
  }
  ::placeholder {
    color: ${theme.palette.text.placeholder};
  }
`

export default globalStyle
