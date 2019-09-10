import {
  ListItemIcon,
  ListItemText,
  MenuItem,
} from '@material-ui/core'
import { MenuItemProps } from '@material-ui/core/MenuItem'
import React from 'react'

import { WithChildren } from 'src/types'

type UserMenuItemProps = WithChildren<
  MenuItemProps & {
    icon: React.ReactElement
    onClick?: (
      event: React.MouseEvent<HTMLLIElement, MouseEvent>
    ) => void
    text: string
  }
>

const UserMenuItem: React.FC<UserMenuItemProps> = ({
  children,
  icon,
  onClick,
  text,
}) => (
  <MenuItem button onClick={onClick}>
    <ListItemIcon color="inherit">{icon}</ListItemIcon>
    <ListItemText
      primary={text}
      primaryTypographyProps={{
        variant: 'subtitle1',
      }}
    />
    {children}
  </MenuItem>
)

export default UserMenuItem
