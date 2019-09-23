import React, { PropsWithChildren } from 'react'

import Scroll from './horizontalScroll.css'

const HorizontalScroll: React.FC<
  PropsWithChildren<{
    className?: string
  }>
> = ({ children, className }) => (
  <Scroll className={className}>{children}</Scroll>
)

export default HorizontalScroll
