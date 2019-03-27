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

const useStyles = makeStyles(theme => ({
  label: {
    fontSize: '0.5rem'
  },
  root: {
    borderTop: {
      color: theme.palette.divider,
      style: 'solid',
      width: 1
    },
    bottom: 0,
    boxShadow: 'none',
    top: 'auto'
  },
  selected: {
    fontSize: '0.65rem !important'
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
