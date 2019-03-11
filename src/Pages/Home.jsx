import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

import FeaturedApps from 'Containers/FeaturedApps';
import NewApps from 'Containers/NewApps';
import TopApps from 'Containers/TopApps';

const useStyles = makeStyles(theme => ({
  header: {
    marginLeft: theme.spacing(3)
  },
  list: {
    '-webkit-overflow-scrolling': 'touch',
    '-webkit-scroll-snap-points-x': 'repeat(100%)',
    '-webkit-scroll-snap-type': 'mandatory',
    listStyle: 'none',
    margin: '0px -20px',
    overflowX: 'scroll',
    overflowY: 'hidden',
    padding: '0 15px 20px 35px',
    'scroll-snap-points-x': 'repeat(100%)',
    scrollSnapType: 'x mandatory',
    whiteSpace: 'nowrap'
  },
  root: {
    overflowX: 'hidden'
  }
}));

const Home = React.memo(() => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
      <Typography className={classes.header} variant="h6">
        Featured Apps
      </Typography>
      <Grid className={classes.list} container spacing={2} wrap="nowrap">
        <FeaturedApps />
      </Grid>
      <Typography className={classes.header} variant="h6">
        Top Apps
      </Typography>
      <Grid className={classes.list} container spacing={2} wrap="nowrap">
        <TopApps />
      </Grid>
      <Typography className={classes.header} variant="h6">
        New Apps
      </Typography>
      <Grid className={classes.list} container spacing={2} wrap="nowrap">
        <NewApps />
      </Grid>
    </Grid>
  );
});

export default Home;
