import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { mount, route } from 'navi';
import { useHistory } from 'react-navi';
import { useQuery } from 'react-apollo-hooks';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

import CategoryIcon from 'Components/CategoryIcon';
import GET_CATEGORIES from 'Graphql/GetCategories.gql';

export default mount({
  '/': route({
    async getView() {
      return <Categories />;
    }
  })
});

const useStyles = makeStyles(theme => ({
  item: {
    padding: theme.spacing(2)
  },
  root: {
    backgroundColor: theme.palette.background.paper
  }
}));

const Categories = React.memo(() => {
  const classes = useStyles();
  const { data, loading } = useQuery(GET_CATEGORIES);
  const history = useHistory();
  if (loading) {
    return (
      <List className={classes.root}>
        <ListItem className={classes.item} disableGutters divider>
          <ListItemIcon>
            <Skeleton circle height="1em" width="1em" />
          </ListItemIcon>
          <ListItemText primary={<Skeleton />} />
        </ListItem>
        <ListItem className={classes.item} disableGutters divider>
          <ListItemIcon>
            <Skeleton circle height="1em" width="1em" />
          </ListItemIcon>
          <ListItemText primary={<Skeleton />} />
        </ListItem>
        <ListItem className={classes.item} disableGutters divider>
          <ListItemIcon>
            <Skeleton circle height="1em" width="1em" />
          </ListItemIcon>
          <ListItemText primary={<Skeleton />} />
        </ListItem>
        <ListItem className={classes.item} disableGutters divider>
          <ListItemIcon>
            <Skeleton circle height="1em" width="1em" />
          </ListItemIcon>
          <ListItemText primary={<Skeleton />} />
        </ListItem>
        <ListItem className={classes.item} disableGutters divider>
          <ListItemIcon>
            <Skeleton circle height="1em" width="1em" />
          </ListItemIcon>
          <ListItemText primary={<Skeleton />} />
        </ListItem>
        <ListItem className={classes.item} disableGutters divider>
          <ListItemIcon>
            <Skeleton circle height="1em" width="1em" />
          </ListItemIcon>
          <ListItemText primary={<Skeleton />} />
        </ListItem>
        <ListItem className={classes.item} disableGutters divider>
          <ListItemIcon>
            <Skeleton circle height="1em" width="1em" />
          </ListItemIcon>
          <ListItemText primary={<Skeleton />} />
        </ListItem>
        <ListItem className={classes.item} disableGutters divider>
          <ListItemIcon>
            <Skeleton circle height="1em" width="1em" />
          </ListItemIcon>
          <ListItemText primary={<Skeleton />} />
        </ListItem>
        <ListItem className={classes.item} disableGutters divider>
          <ListItemIcon>
            <Skeleton circle height="1em" width="1em" />
          </ListItemIcon>
          <ListItemText primary={<Skeleton />} />
        </ListItem>
      </List>
    );
  }

  return (
    <List className={classes.root}>
      {data.categories.map(category => {
        return (
          <ListItem
            key={category.id}
            button
            className={classes.item}
            disableGutters
            divider
            onClick={() => history.push(`/category/${category.name}`)}
          >
            <ListItemIcon style={{ color: 'inherit' }}>
              <CategoryIcon name={category.name} />
            </ListItemIcon>
            <ListItemText
              primary={category.name}
              primaryTypographyProps={{
                color: 'inherit'
              }}
            />
          </ListItem>
        );
      })}
    </List>
  );
});
