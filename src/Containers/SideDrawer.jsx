import { Drawer, List, ListItemIcon, ListItemText } from '@material-ui/core';
import {
  HomeOutlined as HomeIcon,
  SearchOutlined as SearchIcon
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

import CategoryList from 'Containers/CategoryList';
import NavLink from 'Components/NavLink';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    flexShrink: 0,
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  listIcon: {
    color: 'inherit'
  },
  toolbar: theme.mixins.toolbar
}));

const SideDrawer = React.memo(() => {
  const classes = useStyles();
  return (
    <Drawer
      classes={{
        paper: classes.drawerPaper
      }}
      className={classes.drawer}
      variant="permanent"
    >
      <div className={classes.toolbar} />
      <List>
        <NavLink href="/" LinkProps={{ exact: true }}>
          <ListItemIcon className={classes.listIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ color: 'inherit' }}>
            Home
          </ListItemText>
        </NavLink>
        <NavLink href="/search/">
          <ListItemIcon className={classes.listIcon}>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ color: 'inherit' }}>
            Search
          </ListItemText>
        </NavLink>
      </List>
      <CategoryList />
    </Drawer>
  );
});

export default SideDrawer;
