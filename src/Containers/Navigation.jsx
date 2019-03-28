import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core';
import {
  HomeOutlined as HomeIcon,
  SearchOutlined as SearchIcon,
  CategoryOutlined as CategoryIcon,
  PollOutlined as TopIcon
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { useCurrentRoute, useHistory } from 'react-navi';
import React from 'react';

const useStyles = makeStyles(theme => ({
  label: {
    fontSize: '0.75rem',
    fontWeight: '500'
  },
  root: {
    borderTop: {
      color: theme.palette.divider,
      style: 'solid',
      width: 1
    },
    bottom: 0,
    boxShadow: 'none',
    fontSize: '1.8rem',
    top: 'auto'
  },
  selected: {
    fontSize: '0.75rem !important',
    fontWeight: '600 !important'
  }
}));

const Navigation = () => {
  const route = useCurrentRoute();
  const history = useHistory();
  const classes = useStyles();
  const value = route.url.pathname;
  const setValue = (event, newValue) => {
    history.push(newValue);
  };
  return (
    <AppBar className={classes.root}>
      <BottomNavigation onChange={setValue} showLabels value={value}>
        <BottomNavigationAction
          classes={{ label: classes.label, selected: classes.selected }}
          icon={<HomeIcon />}
          label="Home"
          value="/"
        />
        <BottomNavigationAction
          classes={{ label: classes.label, selected: classes.selected }}
          icon={<TopIcon />}
          label="Top apps"
          value="/toplist/"
        />
        <BottomNavigationAction
          classes={{ label: classes.label, selected: classes.selected }}
          icon={<CategoryIcon />}
          label="Categories"
          value="/categories/"
        />
        <BottomNavigationAction
          classes={{ label: classes.label, selected: classes.selected }}
          icon={<SearchIcon />}
          label="Search"
          value="/search/"
        />
      </BottomNavigation>
    </AppBar>
  );
};

export default Navigation;
