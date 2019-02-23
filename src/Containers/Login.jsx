import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Grid,
  Modal,
  Paper,
  TextField
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { useMutation } from 'react-apollo-hooks';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import gql from 'graphql-tag';

const useStyles = makeStyles(theme => ({
  buttonProgress: {
    color: theme.palette.primary,
    left: '50%',
    marginLeft: -12,
    marginTop: -12,
    position: 'absolute',
    top: '50%'
  },
  margin: {
    margin: theme.spacing(1)
  },
  paper: {
    boxShadow: theme.shadows[5],
    margin: 'auto',
    marginTop: '25%',
    outline: 'none',
    padding: theme.spacing(4),
    width: 'fit-content'
  },
  wrapper: {
    position: 'relative'
  }
}));

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Login = ({ isOpen, onClose }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const login = useMutation(LOGIN, {
    update: (_, mutationResult) => {
      localStorage.setItem('token', mutationResult.data.login.token);
      window.location.reload();
    },
    variables: { email, password }
  });
  return (
    <Modal onClose={onClose} open={isOpen}>
      <Paper className={classes.paper}>
        <Grid container direction="column">
          <Grid item>
            <TextField
              className={classes.margin}
              fullWidth
              label="Email"
              onChange={event => setEmail(event.target.value)}
              type="email"
              value={email}
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              className={classes.margin}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              label="Password"
              onChange={event => setPassword(event.target.value)}
              type={showPassword ? 'text' : 'password'}
              value={password}
              variant="outlined"
            />
          </Grid>
          <Grid className={classes.wrapper} item>
            <Button
              className={classes.margin}
              color="primary"
              disabled={loading}
              fullWidth
              onClick={() => {
                setLoading(true);
                login();
              }}
              variant="outlined"
            >
              Login
            </Button>
            {loading && (
              <CircularProgress className={classes.buttonProgress} size={24} />
            )}
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};

Login.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default Login;
