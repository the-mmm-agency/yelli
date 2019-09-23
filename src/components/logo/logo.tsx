import React from 'react'

import Img from './logo.css'

import { useLogo } from 'src/hooks/useLogo'

const Logo: React.FC<{ className?: string }> = ({
  className,
}) => {
  const logo = useLogo()
  return (
    <Img
      className={className}
      fadeIn={false}
      fluid={logo}
      loading="eager"
    />
  )
}

export default Logo
