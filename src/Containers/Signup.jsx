import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  Grid,
  TextField
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { useMutation } from 'react-apollo-hooks';
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
  wrapper: {
    position: 'relative'
  }
}));

const SIGNUP = gql`
  mutation signup($email: String!, $name: String, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Signup = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [verifyPassword, setVerifyPassword] = useState('');
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const login = useMutation(SIGNUP, {
    update: (_, mutationResult) => {
      localStorage.setItem('token', mutationResult.data.login.token);
      window.location.reload();
    },
    variables: { email, name, password }
  });
  return (
    <Grid container direction="column">
      <Grid item>
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          onChange={event => setEmail(event.target.value)}
          required
          type="email"
          value={email}
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          label="Name"
          margin="normal"
          onChange={event => setName(event.target.value)}
          required
          type="text"
          value={name}
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <TextField
          error={password !== verifyPassword}
          fullWidth
          helperText={
            password !== verifyPassword ? 'The passwords do not match' : null
          }
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
          margin="normal"
          onChange={event => setPassword(event.target.value)}
          required
          type={showPassword ? 'text' : 'password'}
          value={password}
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle verify password visibility"
                  onClick={() => setShowVerifyPassword(!showPassword)}
                >
                  {showVerifyPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
          label="Verfiy Password"
          margin="normal"
          onChange={event => setVerifyPassword(event.target.value)}
          required
          type={showVerifyPassword ? 'text' : 'password'}
          value={verifyPassword}
          variant="outlined"
        />
      </Grid>
      <Grid className={classes.wrapper} item>
        <Button
          color="primary"
          disabled={loading}
          fullWidth
          onClick={() => {
            setLoading(true);
            login();
          }}
          variant="outlined"
        >
          Sign Up
        </Button>
        {loading && (
          <CircularProgress className={classes.buttonProgress} size={24} />
        )}
      </Grid>
    </Grid>
  );
};

export default Signup;
