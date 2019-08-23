import React from 'react'

import Scroll from './horizontalScroll.css'

const HorizontalScroll = ({ children, ...props }) => (
  <Scroll {...props}>{children}</Scroll>
)

export default HorizontalScroll
