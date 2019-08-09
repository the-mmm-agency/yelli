import { fontFace } from 'polished'

const weights = {
  400: 'regular',
  500: 'medium',
  600: 'semibold',
}

const fonts = Object.keys(weights).map(fontWeight =>
  fontFace({
    fontFamily: 'proxima-nova',
    fontFilePath: `/fonts/proxima-nova-${weights[fontWeight]}`,
    fontStyle: 'normal',
    fileFormats: ['woff2', 'woff', 'otf'],
    fontDisplay: 'swap',
    fontWeight,
  })
)

export default fonts
