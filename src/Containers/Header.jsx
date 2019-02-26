import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import classNames from 'classnames';
import gql from 'graphql-tag';

import { dispatch, useGlobalState } from 'state';
import Auth from 'Containers/Auth';
import SideDrawer, { drawerWidth } from 'Containers/SideDrawer';
import UserMenu from 'Containers/UserMenu';

const openAuth = () => dispatch({ type: 'openAuth' });
const openDrawer = () => dispatch({ type: 'openDrawer' });

const GET_NAME = gql`
  query currentName {
    me {
      name
    }
  }
`;

const useStyles = makeStyles(theme => ({
  appBar: {
    transition: theme.transitions.create(['width', 'margin'], {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.sharp
    }),
    zIndex: theme.zIndex.drawer + 1
  },
  appBarShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['width', 'margin'], {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.sharp
    }),
    width: `calc(100% - ${drawerWidth}px)`
  },
  grow: {
    flexGrow: 1
  },
  hide: {
    display: 'none'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 36
  },
  root: {
    flexGrow: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  const [drawer] = useGlobalState('drawer');
  const { data, loading } = useQuery(GET_NAME);

  return (
    <React.Fragment>
      <AppBar
        className={classNames(classes.appBar, {
          [classes.appBarShift]: drawer
        })}
        position="fixed"
      >
        <Toolbar>
          <IconButton
            aria-label="Menu"
            className={classNames(classes.menuButton, {
              [classes.hide]: drawer
            })}
            color="inherit"
            onClick={openDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.grow} color="inherit" variant="h6">
            Yelli
          </Typography>
          {!loading && data.me ? (
            <UserMenu name={data.me.name} />
          ) : (
            <Button color="inherit" onClick={openAuth}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <SideDrawer />
      <Auth />
    </React.Fragment>
  );
};

export default Header;
