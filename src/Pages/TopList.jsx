import { List } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import { mount, route } from 'navi';
import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import gql from 'graphql-tag';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import APP_CARD from 'Graphql/AppCard.gql';
import AppCard from 'Containers/AppCard';
import AppListItem from 'Containers/AppListItem';

export default mount({
  '/': route({
    async getView() {
      return <TopList />;
    }
  })
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
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.background.paper,
      minHeight: '100vh'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: {
        bottom: theme.spacing(3),
        left: theme.spacing(4),
        right: theme.spacing(4),
        top: theme.spacing(3)
      }
    },
    listStyle: 'none'
  }
}));

const TopList = React.memo(() => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { data, loading } = useQuery(GET_APPS);

  const AppComponent = matches ? AppCard : AppListItem;

  if (loading) {
    return (
      <List className={classes.root}>
        <AppComponent loading />
        <AppComponent loading />
        <AppComponent loading />
        <AppComponent loading />
        <AppComponent loading />
        <AppComponent loading />
        <AppComponent loading />
      </List>
    );
  }

  return (
    <List className={classes.root}>
      {data.apps.map(app => (
        <AppComponent
          key={app.id}
          category={app.category.name}
          icon={app.icon}
          id={app.id}
          name={app.name}
        />
      ))}
    </List>
  );
});
