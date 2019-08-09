import { css } from '@emotion/core'

const globalStyle = ({ theme }) => css`
  ::selection {
    background: ${theme.palette.primary.main};
    color: white;
  }
  ::placeholder {
    color: ${theme.palette.text.placeholder};
  }
  html,
  body {
    overflow-x: hidden;
    height: auto;
  }
  body {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    background-color: ${theme.palette.background.default};
    word-spacing: ${theme.palette.type === 'dark' ? '0.05em' : 0};
    ${theme.breakpoints.up('sm')} {
      -webkit-user-select: auto;
    }
  }
  *,
  *::before,
  *::after {
    @media (prefers-reduced-motion: reduce) {
      animation: none !important;
      transition: none !important;
    }
  }
`

export default globalStyle
