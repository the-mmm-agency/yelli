import { Button, CircularProgress, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useMutation } from 'react-apollo-hooks';
import React, { useState } from 'react';
import gql from 'graphql-tag';

const useStyles = makeStyles(theme => ({
  buttonProgress: {
    color: theme.palette.primary.main,
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

const FORGOT = gql`
  mutation triggerPasswordReset($email: String!) {
    triggerPasswordReset(email: $email) {
      id
    }
  }
`;

const Forgot = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const forgot = useMutation(FORGOT, {
    update: () => {
      setLoading(false);
    },
    variables: { email }
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
      <Grid className={classes.wrapper} item>
        <Button
          color="primary"
          disabled={loading}
          fullWidth
          onClick={() => {
            setLoading(true);
            forgot();
          }}
          variant="outlined"
        >
          Send Email
        </Button>
        {loading && (
          <CircularProgress className={classes.buttonProgress} size={24} />
        )}
      </Grid>
    </Grid>
  );
};

export default Forgot;
