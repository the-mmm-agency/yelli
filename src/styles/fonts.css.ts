import { fontFace } from 'polished'
import { Styles } from 'polished/lib/types/style'
import { mapObjIndexed } from 'ramda'

type Weights = {
  '400': string
  '500': string
  '600': string
}

// /* eslint-disable quote-props */
const weights: Weights = {
  400: 'regular',
  500: 'medium',
  600: 'semibold',
}
/* eslint-enable quote-props */

const makeFontWeight = (
  fontWeight: keyof Weights,
  weight: string
): Styles =>
  fontFace({
    fileFormats: ['woff2', 'woff', 'otf'],
    fontDisplay: 'swap',
    fontFamily: 'proxima-nova',
    fontFilePath: `/fonts/proxima-nova-${weight}`,
    fontStyle: 'normal',
    fontWeight,
    unicodeRange: 'U+0020—007F',
  })

const fonts = mapObjIndexed(makeFontWeight, weights)
export default fonts
