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
    borderBottomColor: theme.palette.divider,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1
  },
  logo: {
    height: 64,
    marginRight: 'auto'
  }
}));

const Header = () => {
  const classes = useStyles();
  const { data, loading } = useQuery(GET_NAME);

  return (
    <AppBar className={classes.appBar} color="default" position="fixed">
      <Toolbar>
        <img alt="Yelli" className={classes.logo} src={Logo} />
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
};

export default Header;
