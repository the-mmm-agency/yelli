import {
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { navigate } from 'gatsby'
import React, { memo } from 'react'

import { Icon, ListItem } from './application.listItem.css'

import { ApplicationProps } from 'src/types'

const AppListItem: React.FC<ApplicationProps> = ({
  category,
  title,
  icon,
  slug,
}) => {
  const handleClick = (): void => {
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
        <Icon
          fixed={{
            args: {
              height: 50,
              width: 50,
            },
            image: icon,
          }}
          title={title}
        />
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
