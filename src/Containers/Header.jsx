import { AppBar, Button, Hidden, Toolbar } from '@material-ui/core';
import { KeyboardArrowLeft as BackIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { useCurrentRoute, useHistory } from 'react-navi';
import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import gql from 'graphql-tag';

import LogoGif from '../logo.gif';
import LogoWebp from '../logo.webp';

import { dispatch } from 'state';
import { drawerWidth } from 'Containers/SideDrawer';
import UserMenu from 'Containers/UserMenu';

const openAuth = () => dispatch({ type: 'openAuth' });

const GET_NAME = gql`
  query currentName {
    me {
      name
    }
  }
`;

const useStyles = makeStyles(theme => ({
  appBar: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      width: '100%'
    },
    borderBottom: {
      color: theme.palette.divider,
      style: 'solid',
      width: 1
    },
    boxShadow: 'none',
    marginLeft: drawerWidth,
    maxHeight: 'fit-content',
    width: `calc(100% - ${drawerWidth}px)`
  },
  login: {
    marginLeft: 'auto'
  },
  logo: {
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(4)
    },
    cursor: 'pointer',
    height: 64,
    margin: 'auto'
  },
  logoContainer: {
    [theme.breakpoints.down('sm')]: {
      margin: 'auto'
    },
    [theme.breakpoints.up('md')]: {
      borderRight: {
        color: theme.palette.divider,
        style: 'solid',
        width: 1
      }
    },
    display: 'flex',
    width: 216
  },
  name: {
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(2)
    },
    display: 'flex',
    height: 64,
    margin: 'auto'
  },
  spacer: {
    marginRight: 'auto',
    width: 64
  }
}));

const Header = React.memo(() => {
  const classes = useStyles();
  const { data, loading } = useQuery(GET_NAME);
  const route = useCurrentRoute();
  const history = useHistory();
  const isHome = route.title === 'Yelli';

  return (
    <AppBar className={classes.appBar} color="paper" position="absolute">
      <Toolbar>
        <Hidden mdUp>
          <>
            {isHome ? (
              <div className={classes.spacer} />
            ) : (
              <Button color="primary" onClick={() => history.goBack()}>
                <BackIcon />
                Back
              </Button>
            )}
            <div
              className={classes.logoContainer}
              onClick={() => history.push('/')}
            >
              <picture className={classes.logo}>
                <source srcSet={LogoWebp} type="image/webp" />
                <source srcSet={LogoGif} type="image/gif" />
                <img alt="Yelli" className={classes.logo} src={LogoGif} />
              </picture>
            </div>
          </>
        </Hidden>
        {!loading && data.me ? (
          <UserMenu name={data.me.name} />
        ) : (
          <Button className={classes.login} color="primary" onClick={openAuth}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
});

export default Header;
