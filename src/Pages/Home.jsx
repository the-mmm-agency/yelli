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
    display: 'flex',
    listStyle: 'none',
    margin: '0px -20px',
    overflowX: 'scroll',
    overflowY: 'hidden',
    padding: '0 15px 20px 35px',
    'scroll-snap-points-x': 'repeat(100%)',
    scrollSnapType: 'x mandatory',
    whiteSpace: 'nowrap',
    width: '100%'
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
      <ul className={classes.list}>
        <FeaturedApps />
      </ul>
      <Typography className={classes.header} variant="h6">
        Top Apps
      </Typography>
      <ul className={classes.list}>
        <TopApps />
      </ul>
      <Typography className={classes.header} variant="h6">
        New Apps
      </Typography>
      <ul className={classes.list}>
        <NewApps />
      </ul>
    </Grid>
  );
});

export default Home;
