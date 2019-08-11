import { css } from '@emotion/core'

const globalStyle = ({ theme }) => css`
  * {
    @media (prefers-reduced-motion: reduce) {
      animation: none !important;
      transition: none !important;
    }
  }
  html {
    overflow-y: scroll;
    scroll-behavior: smooth;
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
    background-color: ${theme.palette.background.default};
    word-spacing: ${theme.palette.type === 'dark' ? '0.05em' : 0};
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -webkit-user-select: auto;
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
