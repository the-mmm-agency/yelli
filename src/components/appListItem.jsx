import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles(theme => ({
  category: {
    fontWeight: 500,
  },
  icon: {
    height: 50,
    width: 50,
  },
  name: {
    fontWeight: 500,
    width: '100%',
  },
  root: {
    padding: theme.spacing(2),
  },
}))

const AppListItem = ({ handleClick, category, title, icon }) => {
  const classes = useStyles()
  return (
    <ListItem
      button
      className={classes.root}
      disableGutters
      divider
      onClick={handleClick}
    >
      <ListItemIcon>
        <img alt={title} className={classes.icon} src={icon.url} />
      </ListItemIcon>
      <ListItemText
        primary={title}
        primaryTypographyProps={{ className: classes.name }}
        secondary={category.name}
        secondaryTypographyProps={{
          className: classes.category,
          color: 'textSecondary',
          component: 'p',
          variant: 'caption',
        }}
      />
    </ListItem>
  )
}
AppListItem.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
  }),
  handleClick: PropTypes.func,
  icon: PropTypes.string,
  loading: PropTypes.bool,
  prefetchApp: PropTypes.func,
  title: PropTypes.string,
}

export default AppListItem
