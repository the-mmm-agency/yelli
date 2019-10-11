import React from 'react'

export type Weight =
  | 'light'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'

interface Props {
  weight: Weight
}

const PreloadFont: React.FC<Props> = ({ weight }) => (
  <link
    as="font"
    crossOrigin="anonymous"
    href={`/fonts/jost-${weight}.woff2`}
    rel="preload"
    type="font/woff2"
  />
)

export default PreloadFont
