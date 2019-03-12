import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core';
import {
  HomeTwoTone as HomeIcon,
  SearchTwoTone as SearchIcon,
  CategoryTwoTone as CategoryIcon
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { useCurrentRoute, useHistory } from 'react-navi';
import React from 'react';

const useStyles = makeStyles({
  root: {
    bottom: 0,
    top: 'auto'
  }
});

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
        <BottomNavigationAction icon={<HomeIcon />} label="Home" value="/" />
        <BottomNavigationAction
          icon={<CategoryIcon />}
          label="Categories"
          value="/categories/"
        />
        <BottomNavigationAction
          icon={<SearchIcon />}
          label="Search"
          value="/search/"
        />
      </BottomNavigation>
    </AppBar>
  );
};

export default Navigation;
