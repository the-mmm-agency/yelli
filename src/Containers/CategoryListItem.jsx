import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-navi';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

import Skeleton from 'Components/Skeleton';
import CategoryIcon from 'Components/CategoryIcon';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  }
}));

const CategoryListItem = memo(({ name, slug, loading }) => {
  const classes = useStyles();
  const history = useHistory();
  if (loading) {
    return (
      <ListItem className={classes.root} disableGutters divider>
        <ListItemIcon>
          <Skeleton circle height="1em" width="1em" />
        </ListItemIcon>
        <ListItemText primary={<Skeleton />} />
      </ListItem>
    );
  }
  return (
    <ListItem
      button
      className={classes.root}
      disableGutters
      divider
      onClick={() => history.push(`/category/${slug}`)}
    >
      <ListItemIcon style={{ color: 'inherit' }}>
        <CategoryIcon name={name} />
      </ListItemIcon>
      <ListItemText
        primary={name}
        primaryTypographyProps={{
          color: 'inherit'
        }}
      />
    </ListItem>
  );
});

CategoryListItem.propTypes = {
  loading: PropTypes.bool,
  name: PropTypes.string,
  slug: PropTypes.string
};

export default CategoryListItem;
