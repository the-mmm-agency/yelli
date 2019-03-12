import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

import FeaturedApps from 'Containers/FeaturedApps';
import NewApps from 'Containers/NewApps';
import TopApps from 'Containers/TopApps';

const useStyles = makeStyles(theme => ({
  list: {
    [theme.breakpoints.up('sm')]: {
      margin: {
        bottom: -10,
        left: -30,
        right: -30
      },
      padding: {
        bottom: 30,
        left: 30,
        right: 30
      }
    },
    '-webkit-overflow-scrolling': 'touch',
    '-webkit-scroll-snap-points-x': 'repeat(100%)',
    '-webkit-scroll-snap-type': 'mandatory',
    display: 'flex',
    listStyle: 'none',
    margin: {
      left: -20,
      right: -20
    },
    overflowX: 'scroll',
    overflowY: 'hidden',
    padding: {
      bottom: 20,
      left: 20,
      right: 15
    },
    'scroll-snap-points-x': 'repeat(100%)',
    scrollSnapType: 'x mandatory',
    whiteSpace: 'nowrap',
    width: '100%'
  },
  root: {
    overflowX: 'hidden',
    paddingTop: theme.spacing(2)
  },
  section: {
    [theme.breakpoints.up('sm')]: {
      padding: {
        bottom: 10,
        left: 30,
        right: 30
      },
      width: 'calc(100% + 60px)'
    },
    padding: {
      left: 20,
      right: 20,
      top: 20
    },
    width: 'calc(100% + 40px)'
  }
}));

const Home = React.memo(() => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
      <div className={classes.section}>
        <Typography className={classes.header} gutterBottom variant="h6">
          Featured Apps
        </Typography>
        <ul className={classes.list}>
          <FeaturedApps />
        </ul>
      </div>
      <div className={classes.section}>
        <Typography className={classes.header} gutterBottom variant="h6">
          Top Apps
        </Typography>
        <ul className={classes.list}>
          <TopApps />
        </ul>
      </div>
      <div className={classes.section}>
        <Typography className={classes.header} gutterBottom variant="h6">
          New Apps
        </Typography>
        <ul className={classes.list}>
          <NewApps />
        </ul>
      </div>
    </Grid>
  );
});

export default Home;
