import { css } from '@emotion/core'

const globalStyle = ({
  palette: { background, primary, text },
  transitions,
}) => css`
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
    color: ${text.placeholder};
  }
`

export default globalStyle
