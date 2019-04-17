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
      return <TopList />;
    },
    title: 'Yelli - Top Apps'
  })
});

const GET_APPS = gql`
  query topList {
    apps(first: 30, orderBy: rank_DESC) {
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

const TopList = () => {
  const classes = useStyles();
  const { data, loading } = useQuery(GET_APPS);

  return (
    <>
      <Typography className={classes.header} component="h1" variant="h5">
        Top Apps
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
