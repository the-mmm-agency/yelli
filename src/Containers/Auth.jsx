import { Button, Modal, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';

import { dispatch, useGlobalState } from 'state';
import Forgot from 'Containers/Forgot';
import Login from 'Containers/Login';
import Signup from 'Containers/Signup';

const close = () => dispatch({ type: 'closeAuth' });

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  paper: {
    boxShadow: theme.shadows[5],
    margin: 'auto',
    outline: 'none',
    padding: theme.spacing(4),
    width: 'fit-content'
  },
  root: {
    display: 'flex'
  }
}));

const Auth = () => {
  const classes = useStyles();
  const [isOpen] = useGlobalState('auth');
  const [page, setPage] = useState('login');
  return (
    <Modal classes={{ root: classes.root }} onClose={close} open={isOpen}>
      <Paper className={classes.paper}>
        {page === 'login' && <Login />}
        {page === 'forgot' && <Forgot />}
        {page === 'signup' && <Signup />}
        {(page === 'login' || page === 'forgot') && (
          <Button onClick={() => setPage('signup')}>Sign Up</Button>
        )}
        {(page === 'signup' || page === 'forgot') && (
          <Button onClick={() => setPage('login')}>Login</Button>
        )}
        {page === 'login' && (
          <Button onClick={() => setPage('forgot')}>Forgot Password</Button>
        )}
      </Paper>
    </Modal>
  );
};

export default Auth;
