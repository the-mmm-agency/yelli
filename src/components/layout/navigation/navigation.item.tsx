import { BottomNavigationAction } from '@material-ui/core'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import React from 'react'

import { Link } from './navigation.item.css'

interface Props {
  label: React.ReactNode
  icon: Record<
    'default' | 'selected',
    React.ComponentType<SvgIconProps>
  >
  selected?: boolean
  value: string
}

const NavigationItem: React.FC<Props> = ({
  icon,
  ...props
}) => {
  const { selected, value } = props
  const Icon = icon[selected ? 'default' : 'selected']
  return (
    <BottomNavigationAction
      component={Link}
      icon={<Icon />}
      to={value}
      {...props}
    />
  )
}

export default NavigationItem
