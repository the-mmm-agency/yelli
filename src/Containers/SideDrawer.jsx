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
import React from 'react';
import classNames from 'classnames';

import { dispatch, useGlobalState } from 'state';
import Categories from 'Containers/Categories';
import StyledLink from 'Components/StyledLink';

const close = () => dispatch({ type: 'closeDrawer' });

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
    width: theme.spacing(7)
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

const SideDrawer = () => {
  const classes = useStyles();
  const [isOpen] = useGlobalState('drawer');
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
      onClose={close}
      open={isOpen}
      variant="permanent"
    >
      <div className={classes.toolbar}>
        <IconButton onClick={close}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <StyledLink href="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </StyledLink>
        <StyledLink href="/search">
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

export default SideDrawer;
