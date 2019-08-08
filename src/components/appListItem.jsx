import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import Img from 'graphcms-image'

import Link from 'components/link'
import useRememberScroll from 'util/useRememberScroll'

const useStyles = makeStyles(theme => ({
  category: {
    fontSize: '1rem',
    fontWeight: 500,
  },
  icon: {
    height: 50,
    width: 50,
  },
  text: {
    marginLeft: theme.spacing(1),
  },
  root: {
    '&:hover': {
      textDecoration: 'none',
    },
    padding: theme.spacing(2),
    color: 'inherit',
    scrollSnapAlign: 'start',
  },
}))

const AppListItem = ({ category, title, icon, slug }) => {
  const classes = useStyles()
  const handleClick = useRememberScroll()
  return (
    <ListItem
      button
      component={Link}
      to={`/app/${slug}`}
      onClick={handleClick}
      className={classes.root}
      disableGutters
      divider
    >
      <ListItemIcon>
        <Img
          alt="Application Icon"
          className={classes.icon}
          image={icon}
          maxWidth={50}
          title={title}
          fadeIn={false}
          withWebp
        />
      </ListItemIcon>
      <ListItemText
        className={classes.text}
        primary={title}
        primaryTypographyProps={{ variant: 'h6', color: 'textPrimary' }}
        secondary={category.name}
        secondaryTypographyProps={{
          className: classes.category,
          color: 'textSecondary',
          variant: 'subtitle2',
        }}
      />
    </ListItem>
  )
}
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
