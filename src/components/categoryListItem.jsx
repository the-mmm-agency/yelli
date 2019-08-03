import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import { navigate } from 'gatsby'
import classNames from 'classnames'

import CategoryIcon from 'components/categoryIcon'

const useStyles = makeStyles(theme => ({
  icon: {
    color: 'inherit',
  },
  colorfulIcon: {
    color: theme.palette.primary.dark,
  },
  root: {
    padding: theme.spacing(2),
    border: {
      color: theme.palette.divider,
      style: 'solid',
      width: 1,
    },
    backgroundClip: 'padding-box',
    marginBottom: theme.spacing(2),
    ...theme.shape,
  },
}))

const CategoryListItem = ({ name, slug, colorful }) => {
  const classes = useStyles()
  return (
    <ListItem
      button
      className={classes.root}
      disableGutters
      divider
      onClick={() => navigate(`/category/${slug}`)}
    >
      <ListItemIcon
        className={classNames(
          {
            [classes.colorfulIcon]: colorful,
          },
          classes.icon
        )}
      >
        <CategoryIcon name={name} />
      </ListItemIcon>
      <ListItemText
        primary={name}
        primaryTypographyProps={{
          color: 'inherit',
          variant: 'subtitle2',
        }}
      />
    </ListItem>
  )
}

CategoryListItem.propTypes = {
  colorful: PropTypes.bool,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

CategoryListItem.defaultProps = {
  colorful: false,
}

export default CategoryListItem
