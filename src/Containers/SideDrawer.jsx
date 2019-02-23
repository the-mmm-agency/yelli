import {
  ChevronLeft as ChevronLeftIcon,
  Home as HomeIcon,
  Search as SearchIcon
} from '@material-ui/icons';
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemIcon,
  ListItem,
  ListItemText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import Categories from 'Containers/Categories';
import StyledLink from 'Components/StyledLink';

export const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    flexShrink: 0,
    whiteSpace: 'nowrap',
    width: drawerWidth
  },
  drawerClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp
    }),
    width: theme.spacing.unit * 7
  },
  drawerOpen: {
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.sharp
    }),
    width: drawerWidth
  },
  toolbar: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  }
}));

const SideDrawer = ({ isOpen, toggle }) => {
  const classes = useStyles();
  return (
    <Drawer
      classes={{
        paper: classNames(classes.drawer, {
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen
        })
      }}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isOpen,
        [classes.drawerClose]: !isOpen
      })}
      onClose={() => toggle(false)}
      open={isOpen}
      variant="permanent"
    >
      <div className={classes.toolbar}>
        <IconButton onClick={() => toggle(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <StyledLink to="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </StyledLink>
        <StyledLink to="/search">
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText>Search</ListItemText>
          </ListItem>
        </StyledLink>
      </List>
      <Divider />
      <Categories />
    </Drawer>
  );
};

SideDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default SideDrawer;
