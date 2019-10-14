import React from 'react'

export type Weight =
  | 'light'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'

const renderPreload = (weight: Weight): React.ReactNode => (
  <link
    as="font"
    crossOrigin="anonymous"
    href={`/fonts/jost-${weight}.woff2`}
    key={weight}
    rel="preload"
    type="font/woff2"
  />
)

export default renderPreload
