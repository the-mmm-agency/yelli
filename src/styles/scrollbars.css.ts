import { css } from 'src/util/styled'
import { darken, palette, up } from 'src/util/theme'

const scrollbars = css`
  ${up('sm')} {
    ::-webkit-scrollbar {
      background: ${palette('scrollbar.track')};
    }

    ::-webkit-scrollbar-thumb {
      &:hover {
        background: ${darken('scrollbar.thumb', 0.18)};
      }
      background: ${palette('scrollbar.thumb')};
    }

    html {
      scrollbar-color: ${palette('scrollbar.thumb')}
        ${palette('scrollbar.track')};
      scrollbar-width: thin;
    }
  }
`

export default scrollbars
