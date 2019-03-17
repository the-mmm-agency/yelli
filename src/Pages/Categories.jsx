import { List, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { mount, route } from 'navi';
import { useQuery } from 'react-apollo-hooks';
import React from 'react';

import CategoryListItem from 'Containers/CategoryListItem';
import GET_CATEGORIES from 'Graphql/GetCategories.gql';

export default mount({
  '/': route({
    async getView() {
      return <Categories />;
    }
  })
});

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2)
  }
}));

const Categories = React.memo(() => {
  const classes = useStyles();
  const { data, loading } = useQuery(GET_CATEGORIES);
  if (loading) {
    return (
      <div className={classes.root}>
        <Typography variant="h5">Categories</Typography>
        <Typography color="textSecondary">
          Browse progressive web apps by category
        </Typography>
        <List>
          <CategoryListItem loading />
          <CategoryListItem loading />
          <CategoryListItem loading />
          <CategoryListItem loading />
          <CategoryListItem loading />
          <CategoryListItem loading />
        </List>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <Typography variant="h5">Categories</Typography>
      <Typography color="textSecondary">
        Browse progressive web apps by category
      </Typography>
      <List>
        {data.categories.map(category => {
          return <CategoryListItem key={category.id} name={category.name} />;
        })}
      </List>
    </div>
  );
});
