import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { ListItemProps } from '@material-ui/core/ListItem'
import React, { ReactElement } from 'react'

interface Props extends ListItemProps {
  icon: ReactElement
  onClick?: (
    event: React.MouseEvent<any, MouseEvent>
  ) => void
  text: string
}

const UserMenuItem: React.FC<Props> = ({
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
