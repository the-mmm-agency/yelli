import {
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import React, { memo } from 'react'

import { Icon, ListItem } from './application.listItem.css'

import { AppComponentProps } from 'src/types'

const AppListItem: React.FC<AppComponentProps> = ({
  category,
  title,
  icon,
  handleClick,
}) => (
  <ListItem
    button
    disableGutters
    divider
    onClick={handleClick}
    role="link"
  >
    <ListItemIcon>
      <Icon image={icon} title={title} />
    </ListItemIcon>
    <ListItemText
      primary={title}
      primaryTypographyProps={{
        color: 'textPrimary',
        variant: 'h6',
      }}
      secondary={category.name}
      secondaryTypographyProps={{
        color: 'textSecondary',
        variant: 'subtitle1',
      }}
    />
  </ListItem>
)

export default memo(AppListItem)
