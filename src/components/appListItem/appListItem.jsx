import { ListItemIcon, ListItemText } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

import { Icon, ListItem } from './appListItem.css'

import Link from 'components/link'

const AppListItem = ({ category, title, icon, slug }) => (
  <li>
    <ListItem
      button
      component={Link}
      to={`/app/${slug}`}
      disableGutters
      divider
    >
      <ListItemIcon>
        <Icon image={icon} maxWidth={50} title={title} />
      </ListItemIcon>
      <ListItemText
        primary={title}
        primaryTypographyProps={{ variant: 'h6', color: 'textPrimary' }}
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
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default AppListItem
