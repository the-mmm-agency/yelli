import { List } from '@material-ui/core';
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
  root: {
    backgroundColor: theme.palette.background.paper,
    minHeight: '100vh'
  }
}));

const TopList = () => {
  const classes = useStyles();
  const { data, loading } = useQuery(GET_APPS);

  if (loading || !data.apps) {
    return (
      <List className={classes.root}>
        {[...new Array(20).keys()].map(key => (
          <AppComponent key={key} isLoading type="list" />
        ))}
      </List>
    );
  }

  return (
    <List className={classes.root}>
      {data.apps.map(app => (
        <AppComponent key={app.id} id={app.id} type="list" />
      ))}
    </List>
  );
};
