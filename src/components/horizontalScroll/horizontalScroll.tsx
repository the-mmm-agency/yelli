import React from 'react'

import Scroll from './horizontalScroll.css'
import { WithChildren } from 'types'

const HorizontalScroll: React.FC<
  WithChildren<{ className?: string }>
> = ({ children, className }) => (
  <Scroll className={className}>{children}</Scroll>
)

export default HorizontalScroll
