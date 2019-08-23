import {
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import React, { memo } from 'react'

import { ApplicationProps } from 'types'
import { navigate } from 'gatsby'
import { Icon, ListItem } from './application.listItem.css'

const AppListItem: React.FC<ApplicationProps> = ({
  category,
  title,
  icon,
  slug,
}) => {
  const handleClick = () => {
    navigate(`/app/${slug}`)
  }
  return (
    <ListItem
      button
      disableGutters
      divider
      onClick={handleClick}
    >
      <ListItemIcon>
        <Icon image={icon} maxWidth={50} title={title} />
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
}

export default memo(AppListItem)
