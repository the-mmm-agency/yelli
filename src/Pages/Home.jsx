import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-navi';
import React from 'react';

import FeaturedApps from 'Containers/FeaturedApps';
import NewApps from 'Containers/NewApps';
import TopApps from 'Containers/TopApps';

const useStyles = makeStyles(theme => ({
  button: {
    fontSize: '0.675rem',
    height: 35,
    margin: {
      bottom: theme.spacing(1),
      left: 'auto',
      right: theme.spacing(6),
      top: 5
    },
    width: 116
  },
  header: {
    display: 'flex'
  },
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
      display: 'flex',
      flexDirection: 'column',
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
  const history = useHistory();
  return (
    <Grid className={classes.root} container>
      <div className={classes.section}>
        <Typography gutterBottom variant="h6">
          Featured Apps
        </Typography>
        <ul className={classes.list}>
          <FeaturedApps />
        </ul>
      </div>
      <div className={classes.section}>
        <div className={classes.header}>
          <Typography gutterBottom variant="h6">
            Top Apps
          </Typography>
          <Button
            className={classes.button}
            color="primary"
            onClick={() => history.push('/toplist')}
            variant="outlined"
          >
            view more
          </Button>
        </div>
        <ul className={classes.list}>
          <TopApps />
        </ul>
      </div>
      <div className={classes.section}>
        <div className={classes.header}>
          <Typography gutterBottom variant="h6">
            New Apps
          </Typography>
          <Button
            className={classes.button}
            color="primary"
            onClick={() => history.push('/new')}
            variant="outlined"
          >
            view all
          </Button>
        </div>
        <ul className={classes.list}>
          <NewApps />
        </ul>
      </div>
    </Grid>
  );
});

export default Home;
