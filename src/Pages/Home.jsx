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
      left: theme.spacing(3)
    }
  },
  root: {
    padding: 'none'
  },
  section: {
    padding: {
      bottom: theme.spacing(3),
      top: theme.spacing(3)
    },
    width: '100%'
  }
}));

const getPageLength = (isSm, isMd) => {
  if (isMd) {
    return 6;
  }
  if (isSm) {
    return 4;
  }
  return 8;
};

const Home = React.memo(() => {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
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
        <TopApps pageLength={pageLength} />
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
        <NewApps pageLength={pageLength} />
      </div>
    </Grid>
  );
});

export default Home;
