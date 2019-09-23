import fonts from './fonts.css'
import overrides from './overrides.css'
import scrollbars from './scrollbars.css'

import { createGlobalStyle } from 'src/util/styled'
import { palette } from 'src/util/theme'

const GlobalStyle = createGlobalStyle`
  * {
    @media (prefers-reduced-motion: reduce) {
      transition: none !important;
      animation: none !important;
    }
  }

  html {
    overflow-y: scroll;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: subpixel-antialiased !important;
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
    background-color: ${palette('background.default')};
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }

  ul {
    list-style: none;
  }

  ::selection {
    color: white;
    background: ${palette('primary.main')};
  }

  ::placeholder {
    color: ${palette('text.placeholder')} !important;
    font-weight: 500;
  }
  ${fonts}
  ${overrides}
  ${scrollbars}
`

export default GlobalStyle
