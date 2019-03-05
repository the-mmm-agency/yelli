import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import gql from 'graphql-tag';

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
    zIndex: theme.zIndex.drawer + 1
  },
  grow: {
    flexGrow: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  const { data, loading } = useQuery(GET_NAME);

  return (
    <AppBar className={classes.appBar} color="primary" position="fixed">
      <Toolbar>
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
  );
};

export default Header;
