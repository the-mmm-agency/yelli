import { CircularProgress, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles({
  container: {
    margin: 'auto'
  },
  root: {
    height: '90vh',
    width: '90vw'
  }
});

const CenterProgress = React.memo(() => {
  const classes = useStyles();
  return (
    <Grid alignContent="center" className={classes.root} container>
      <Grid className={classes.container} item>
        <CircularProgress size={100} />
      </Grid>
    </Grid>
  );
});

export default CenterProgress;
