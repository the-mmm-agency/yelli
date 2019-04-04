import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core';
import {
  Home,
  Search,
  Category,
  Poll,
  HomeOutlined,
  CategoryOutlined,
  PollOutlined
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { useCurrentRoute, useHistory } from 'react-navi';
import React, { memo } from 'react';

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: '1.7rem'
  },
  label: {
    fontSize: '0.75rem',
    fontWeight: '500'
  },
  root: {
    backgroundColor: theme.palette.background.default,
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

const Navigation = memo(() => {
  const route = useCurrentRoute();
  const history = useHistory();
  const classes = useStyles();
  const value = route.url.pathname;
  const setValue = (event, newValue) => {
    event.preventDefault();
    history.push(newValue);
  };
  return (
    <AppBar className={classes.root}>
      <BottomNavigation onChange={setValue} showLabels value={value}>
        <BottomNavigationAction
          classes={{ label: classes.label, selected: classes.selected }}
          icon={
            value === '/' ? (
              <Home className={classes.icon} />
            ) : (
              <HomeOutlined className={classes.icon} />
            )
          }
          label="Home"
          value="/"
        />
        <BottomNavigationAction
          classes={{ label: classes.label, selected: classes.selected }}
          icon={
            value === '/toplist/' ? (
              <Poll className={classes.icon} />
            ) : (
              <PollOutlined className={classes.icon} />
            )
          }
          label="Top apps"
          value="/toplist/"
        />
        <BottomNavigationAction
          classes={{ label: classes.label, selected: classes.selected }}
          icon={
            value === '/categories/' ? (
              <Category className={classes.icon} />
            ) : (
              <CategoryOutlined className={classes.icon} />
            )
          }
          label="Categories"
          value="/categories/"
        />
        <BottomNavigationAction
          classes={{ label: classes.label, selected: classes.selected }}
          icon={<Search className={classes.icon} />}
          label="Search"
          value="/search/"
        />
      </BottomNavigation>
    </AppBar>
  );
});

export default Navigation;
