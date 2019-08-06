import { ListItem } from '@material-ui/core'
import { fade } from '@material-ui/core/styles/colorManipulator'
import { makeStyles } from '@material-ui/styles'
import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'

import Link from 'components/link'

const useStyles = makeStyles(theme => ({
  active: {
    backgroundColor: fade(theme.palette.primary.main, 0.24),
    color: `${theme.palette.primary.main} !important`,
    fontWeight: '600 !important',
  },
  listItem: {
    '&:focus': {
      backgroundColor: 'inherit',
    },
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.08),
      color: theme.palette.primary.main,
    },
    backgroundColor: 'inherit',
    borderRadius: 8,
    color: 'inherit',
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(1),
    padding: theme.spacing(0.8),
    transition: theme.transitions.create(['background-color', 'color'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.sharp,
    }),
    width: `calc(100% - ${theme.spacing(4)}px)`,
  },
  root: {
    '&::-moz-focus-inner': {
      borderStyle: 'none',
    },
    '-moz-appearance': 'none',
    '-webkit-appearance': 'none',
    border: 0,
    borderRadius: 0,
    color: 'inherit',
    cursor: 'pointer',
    fontWeight: 500,
    margin: 0,
    outline: 'none',
    padding: 0,
    textDecoration: 'none',
    userSelect: 'none',
    verticalAlign: 'middle',
    WebkitTapHighlightColor: 'transparent',
  },
}))

const NavLink = ({ children, href, LinkProps, ListItemProps }) => {
  const classes = useStyles()
  const getLinkProps = ({ isCurrent }) => ({
    className: classNames(classes.root, { [classes.active]: isCurrent }),
  })

  return (
    <Link getProps={getLinkProps} to={href} {...LinkProps}>
      <ListItem
        button
        classes={{
          focusVisible: classes.listItem,
          selected: classes.active,
        }}
        className={classes.listItem}
        dense
        {...ListItemProps}
      >
        {children}
      </ListItem>
    </Link>
  )
}

NavLink.propTypes = {
  LinkProps: PropTypes.object,
  ListItemProps: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  href: PropTypes.string.isRequired,
}

export default NavLink
