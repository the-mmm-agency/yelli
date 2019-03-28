import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { mount, route } from 'navi';
import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import gql from 'graphql-tag';

import APP_CARD from 'Graphql/AppCard.gql';
import AppListItem from 'Containers/AppListItem';

export default mount({
  '/': route(async () => ({
    title: 'Yelli - Top Apps',
    view: <TopList />
  }))
});

const GET_APPS = gql`
  query topApps {
    apps(orderBy: rank_DESC) {
      ...AppCard
    }
  }
  ${APP_CARD}
`;

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    minHeight: '100vh'
  }
}));

const TopList = React.memo(() => {
  const classes = useStyles();
  const { data, loading } = useQuery(GET_APPS);

  if (loading) {
    return (
      <List className={classes.root}>
        <AppListItem loading />
        <AppListItem loading />
        <AppListItem loading />
        <AppListItem loading />
        <AppListItem loading />
        <AppListItem loading />
        <AppListItem loading />
      </List>
    );
  }

  return (
    <List className={classes.root}>
      {data.apps.map(app => (
        <AppListItem
          key={app.id}
          category={app.category}
          icon={app.icon}
          id={app.id}
          name={app.name}
        />
      ))}
    </List>
  );
});
