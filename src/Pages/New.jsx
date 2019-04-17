import { List, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { mount, route } from 'navi';
import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import gql from 'graphql-tag';

import AppComponent from 'Containers/AppComponent';

export default mount({
  '/': route({
    async getView() {
      return <New />;
    },
    title: 'Yelli - New Apps'
  })
});

const GET_APPS = gql`
  query newApps {
    apps(first: 30, orderBy: createdAt_ASC) {
      id
    }
  }
`;

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
      padding: {
        bottom: theme.spacing(1),
        left: theme.spacing(4),
        right: theme.spacing(4),
        top: theme.spacing(3)
      }
    },
    padding: {
      bottom: theme.spacing(2),
      left: theme.spacing(4),
      right: theme.spacing(4),
      top: theme.spacing(2)
    }
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    minHeight: '100vh'
  }
}));

const New = () => {
  const classes = useStyles();
  const { data, loading } = useQuery(GET_APPS);

  if (loading) {
    return (
      <List className={classes.root}>
        {[...new Array(20).keys()].map(key => (
          <AppComponent key={key} isLoading type="list" />
        ))}
      </List>
    );
  }

  return (
    <>
      <Typography className={classes.header} component="h1" variant="h5">
        New Apps
      </Typography>
      <List className={classes.root}>
        {loading || !data.apps
          ? [...new Array(20).keys()].map(key => (
              <AppComponent key={key} isLoading type="list" />
            ))
          : data.apps.map(app => (
              <AppComponent key={app.id} id={app.id} type="list" />
            ))}
      </List>
    </>
  );
};
