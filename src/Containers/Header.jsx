import { AppBar, Button, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
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
    backgroundColor: theme.palette.background.paper,
    borderBottomColor: theme.palette.background.default,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1
  },
  logo: {
    [theme.breakpoints.up('sm')]: {
      margin: 'auto'
    },
    height: 64,
    marginLeft: theme.spacing(2)
  },
  logoContainer: {
    [theme.breakpoints.up('sm')]: {
      borderRight: {
        color: theme.palette.background.default,
        style: 'solid',
        width: 1
      }
    },
    display: 'flex',
    marginLeft: -24,
    width: 240
  }
}));

const Header = React.memo(() => {
  const classes = useStyles();
  const { data, loading } = useQuery(GET_NAME);

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar>
        <div className={classes.logoContainer}>
          <picture className={classes.logo}>
            <source srcSet={LogoWebp} type="image/webp" />
            <source srcSet={LogoGif} type="image/gif" />
            <img alt="Yelli" className={classes.logo} src={LogoGif} />
          </picture>
        </div>
        {!loading && data.me ? (
          <UserMenu name={data.me.name} />
        ) : (
          <Button color="inherit" onClick={openAuth}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
});

export default Header;
