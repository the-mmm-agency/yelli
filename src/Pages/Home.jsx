import { Divider, Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-navi';
import React, { memo } from 'react';

import FeaturedApps from 'Containers/FeaturedApps';
import NewApps from 'Containers/NewApps';
import TopApps from 'Containers/TopApps';

const useStyles = makeStyles(theme => ({
  button: {
    fontWeight: 600,
    margin: {
      left: 'auto',
      right: theme.spacing(3)
    },
    textTransform: 'capitalize'
  },
  divider: {
    width: '100%'
  },
  header: {
    display: 'flex',
    padding: {
      left: theme.spacing(4)
    }
  },
  root: {
    padding: {
      top: theme.spacing(2)
    }
  },
  section: {
    padding: {
      bottom: theme.spacing(1),
      top: theme.spacing(1)
    },
    width: '100%'
  }
}));

const Home = memo(() => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Grid className={classes.root} container>
      <div className={classes.section}>
        <div className={classes.header}>
          <Typography component="h2" gutterBottom variant="h6">
            Featured Apps
          </Typography>
        </div>
        <FeaturedApps />
      </div>
      <Divider className={classes.divider} />
      <div className={classes.section}>
        <div className={classes.header}>
          <Typography component="h2" gutterBottom variant="h6">
            Top Apps
          </Typography>
          <Button
            className={classes.button}
            color="primary"
            onClick={() => history.push('/toplist')}
            size="small"
            variant="text"
          >
            view more
          </Button>
        </div>
        <TopApps />
      </div>
      <Divider className={classes.divider} />
      <div className={classes.section}>
        <div className={classes.header}>
          <Typography component="h2" gutterBottom variant="h6">
            New Apps
          </Typography>
          <Button
            className={classes.button}
            color="primary"
            onClick={() => history.push('/new')}
            size="small"
            variant="text"
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
