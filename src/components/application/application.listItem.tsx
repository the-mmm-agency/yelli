import {
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import React, { memo } from 'react'

import { Icon, ListItem } from './application.listItem.css'

import Link from 'src/elements/link'
import { AppComponentProps } from 'src/types'

const AppListItem: React.FC<AppComponentProps> = ({
  category,
  title,
  icon,
  to,
}) => (
  <ListItem
    button
    disableGutters
    divider
    component={Link}
    to={to}
  >
    <ListItemIcon>
      <Icon fixed={icon.fixed} title={title} />
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
        component: 'p',
        variant: 'subtitle1',
      }}
    />
  </ListItem>
)

export default memo(AppListItem)
