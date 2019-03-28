import { Divider, Grid, Typography, Button } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/styles';
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
    display: 'flex',
    padding: {
      left: theme.spacing(2)
    }
  },
  root: {
    paddingTop: theme.spacing(3)
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
    marginBottom: theme.spacing(2),
    padding: {
      left: 20,
      right: 20,
      top: 20
    },
    width: 'calc(100% + 40px)'
  }
}));

const getPageLength = (isSm, isMd) => {
  if (isMd) {
    return 4;
  }
  if (isSm) {
    return 3;
  }
  return 6;
};

const Home = React.memo(() => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const pageLength = getPageLength(isSm, isMd);
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
      <Divider />
      <div className={classes.section}>
        <div className={classes.header}>
          <Typography component="h2" gutterBottom variant="h6">
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
        <TopApps pageLength={pageLength} />
      </div>
      <Divider />
      <div className={classes.section}>
        <div className={classes.header}>
          <Typography component="h2" gutterBottom variant="h6">
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
        <NewApps pageLength={pageLength} />
      </div>
    </Grid>
  );
});

export default Home;
