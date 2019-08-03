import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import { navigate } from 'gatsby'

import CategoryIcon from 'components/categoryIcon'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },
}))

const CategoryListItem = ({ name, slug }) => {
  const classes = useStyles()
  return (
    <ListItem
      button
      className={classes.root}
      disableGutters
      divider
      onClick={() => navigate(`/category/${slug}`)}
    >
      <ListItemIcon style={{ color: 'inherit' }}>
        <CategoryIcon name={name} />
      </ListItemIcon>
      <ListItemText
        primary={name}
        primaryTypographyProps={{
          color: 'inherit',
        }}
      />
    </ListItem>
  )
}

CategoryListItem.propTypes = {
  name: PropTypes.string,
  slug: PropTypes.string,
}

export default CategoryListItem
