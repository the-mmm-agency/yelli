import { fontFace } from 'polished'

const weights = {
  400: 'regular',
  500: 'medium',
  600: 'semibold',
}

const fonts = Object.keys(weights).map(fontWeight =>
  fontFace({
    fileFormats: ['woff2', 'woff', 'otf'],
    fontDisplay: 'swap',
    fontFamily: 'proxima-nova',
    fontFilePath: `/fonts/proxima-nova-${weights[fontWeight]}`,
    fontStyle: 'normal',
    fontWeight,
    unicodeRange: 'U+0020—007F',
  })
)

export default fonts
