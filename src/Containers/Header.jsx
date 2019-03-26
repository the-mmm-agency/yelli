import { AppBar, Button, Hidden, Toolbar, Typography } from '@material-ui/core';
import { KeyboardArrowLeft as BackIcon } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useCurrentRoute, useHistory } from 'react-navi';
import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import gql from 'graphql-tag';

import LogoGif from '../logo.gif';
import LogoWebp from '../logo.webp';

import { dispatch } from 'state';
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
    backgroundColor:
      window.scrollY > 1
        ? 'rgba(255,255,255,0.8)'
        : theme.palette.background.paper,
    borderBottom: {
      color: theme.palette.divider,
      style: 'solid',
      width: 1
    },
    boxShadow: 'none',
    maxHeight: 'fit-content',
    zIndex: theme.zIndex.drawer + 1
  },
  login: {
    marginLeft: 'auto'
  },
  logo: {
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(2)
    },
    cursor: 'pointer',
    height: 64,
    margin: 'auto'
  },
  logoContainer: {
    [theme.breakpoints.down('md')]: {
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
  const name = route.title ? route.title.replace('Yelli - ', '') : 'Yelli';
  const isHome = route.title === 'Yelli';
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <AppBar className={classes.appBar} position="absolute">
      <Toolbar>
        <Hidden mdUp>
          {isHome ? (
            <div className={classes.spacer} />
          ) : (
            <Button color="primary" onClick={() => history.goBack()}>
              <BackIcon />
              Back
            </Button>
          )}
        </Hidden>
        <div
          className={classes.logoContainer}
          onClick={() => history.push('/')}
        >
          {isHome || matches ? (
            <picture className={classes.logo}>
              <source srcSet={LogoWebp} type="image/webp" />
              <source srcSet={LogoGif} type="image/gif" />
              <img alt="Yelli" className={classes.logo} src={LogoGif} />
            </picture>
          ) : (
            <Typography
              align="center"
              className={classes.name}
              component="h1"
              variant="h5"
            >
              {name}
            </Typography>
          )}
        </div>
        <Hidden smDown>
          {!isHome && (
            <Typography
              align="center"
              className={classes.name}
              component="h1"
              variant="h5"
            >
              {name}
            </Typography>
          )}
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
