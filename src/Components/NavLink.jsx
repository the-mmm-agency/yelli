import { Link } from 'react-navi';
import { ListItem } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
  active: {
    backgroundColor: fade(theme.palette.primary.main, 0.24),
    color: `${theme.palette.primary.main} !important`,
    fontWeight: '600 !important'
  },
  listItem: {
    '&:focus': {
      backgroundColor: 'inherit'
    },
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.08),
      color: `${theme.palette.primary.main} !important`
    },
    backgroundColor: 'inherit',
    borderRadius: '0 64px 64px 0',
    color: 'inherit',
    transition: theme.transitions.create(['background-color', 'color'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.sharp
    }),
    width: 'calc(100% - 16px)'
  },
  root: {
    '&::-moz-focus-inner': {
      borderStyle: 'none'
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
    WebkitTapHighlightColor: 'transparent'
  }
}));

const NavLink = React.memo(({ children, href, LinkProps, ListItemProps }) => {
  const classes = useStyles();
  return (
    <Link
      activeClassName={classes.active}
      className={classes.root}
      href={href}
      {...LinkProps}
    >
      <ListItem
        button
        classes={{
          focusVisible: classes.listItem,
          selected: classes.active
        }}
        className={classes.listItem}
        dense
        {...ListItemProps}
      >
        {children}
      </ListItem>
    </Link>
  );
});

NavLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  href: PropTypes.string.isRequired,
  LinkProps: PropTypes.object,
  ListItemProps: PropTypes.object
};

export default NavLink;
