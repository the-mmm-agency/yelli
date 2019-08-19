import {
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import Link from 'components/link'
import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { Icon, ListItem } from './application.listItem.css'

const AppListItem = ({ category, title, icon, slug }) => (
  <li>
    <ListItem
      button
      disableGutters
      divider
      component={Link}
      to={`/app/${slug}`}
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
  </li>
)

AppListItem.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  icon: PropTypes.shape({
    handle: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default memo(AppListItem)
