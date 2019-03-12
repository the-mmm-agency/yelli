import { AppBar, Button, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import gql from 'graphql-tag';

import Logo from '../logo.png';

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
    height: 64,
    margin: 'auto'
  },
  logoContainer: {
    borderRight: `1px solid ${theme.palette.background.default}`,
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
          <img alt="Yelli" className={classes.logo} src={Logo} />
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
