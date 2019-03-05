import {
  Divider,
  Drawer,
  List,
  Hidden,
  ListItemIcon,
  ListItem,
  ListItemText
} from '@material-ui/core';
import {
  HomeOutlined as HomeIcon,
  Search as SearchIcon
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

import Categories from 'Containers/Categories';
import StyledLink from 'Components/StyledLink';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    flexShrink: 0,
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar
}));

const SideDrawer = () => {
  const classes = useStyles();
  return (
    <Hidden smDown>
      <Drawer
        classes={{
          paper: classes.drawerPaper
        }}
        className={classes.drawer}
        variant="permanent"
      >
        <div className={classes.toolbar} />
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
    </Hidden>
  );
};

export default SideDrawer;
