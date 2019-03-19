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
      left: 'auto',
      right: theme.spacing(3)
    },
    width: 116
  },
  header: {
    display: 'flex'
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
        <FeaturedApps />
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
        <TopApps />
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
        <NewApps />
      </div>
    </Grid>
  );
});

export default Home;
