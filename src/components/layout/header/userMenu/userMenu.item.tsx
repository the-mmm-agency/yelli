import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { ListItemProps } from '@material-ui/core/ListItem'
import React from 'react'

import { WithChildren } from 'src/types'

type UserMenuItemProps = WithChildren<
  ListItemProps & {
    icon: React.ReactElement
    onClick?: (
      event: React.MouseEvent<any, MouseEvent>
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
  <ListItem button onClick={onClick}>
    <ListItemIcon color="inherit">{icon}</ListItemIcon>
    <ListItemText
      primary={text}
      primaryTypographyProps={{
        variant: 'subtitle1',
      }}
    />
    {children}
  </ListItem>
)

export default UserMenuItem
