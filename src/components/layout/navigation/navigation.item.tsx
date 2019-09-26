import { BottomNavigationAction } from '@material-ui/core'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import React from 'react'

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
  const Icon = icon[props.selected ? 'default' : 'selected']
  return (
    <BottomNavigationAction icon={<Icon />} {...props} />
  )
}

export default NavigationItem
