import { css } from '@emotion/core'

const globalStyle = ({
  palette: { background, primary, text },
  transitions,
}) => css`
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
    transition: ${transitions.create([
      'color',
      'background-color',
    ])};
    background-color: ${background.default};
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -webkit-user-select: auto;
  }
  ul {
    list-style: none;
  }
  ::selection {
    background: ${primary.main};
    color: white;
  }
  ::placeholder {
    color: ${text.placeholder};
  }
`

export default globalStyle
