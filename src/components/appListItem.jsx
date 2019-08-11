import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'

import Link from 'components/link'
import AppIcon from 'components/appIcon'
import { spacing } from 'util/theme'

const Icon = styled(AppIcon)`
  width: 50px;
  height: 50px;
  margin-right: ${spacing(3)};
`

const Item = styled(ListItem)`
  padding: ${spacing(2)};
`

const AppListItem = ({ category, title, icon, slug }) => (
  <li>
    <Item button component={Link} to={`/app/${slug}`} disableGutters divider>
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
    </Item>
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
