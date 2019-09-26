import { BottomNavigationAction } from '@material-ui/core'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import { Location } from '@reach/router'
import React from 'react'

interface Props
  extends Record<
    'Filled' | 'Outlined',
    React.ComponentType<SvgIconProps>
  > {
  path: string
  label: string
}

const NavigationItem: React.FC<Props> = ({
  Filled,
  Outlined,
  path,
  label,
}) => (
  <Location>
    {({ location: { pathname } }) => (
      <BottomNavigationAction
        icon={path === pathname ? <Filled /> : <Outlined />}
        label={label}
        value={path}
      />
    )}
  </Location>
)

export default NavigationItem
