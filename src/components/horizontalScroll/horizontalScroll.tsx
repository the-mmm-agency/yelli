import React from 'react'

import Scroll from './horizontalScroll.css'

import { ClassName, WithChildren } from 'src/types'

const HorizontalScroll: React.FC<
  WithChildren<ClassName>
> = ({ children, className }) => (
  <Scroll className={className}>{children}</Scroll>
)

export default HorizontalScroll
