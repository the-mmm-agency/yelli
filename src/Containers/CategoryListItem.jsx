import { Fade, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-navi';
import PropTypes from 'prop-types';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

import CategoryIcon from 'Components/CategoryIcon';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  }
}));

const CategoryListItem = React.memo(({ name, loading }) => {
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
    <Fade appear in>
      <ListItem
        button
        className={classes.root}
        disableGutters
        divider
        onClick={() => history.push(`/category/${name}`)}
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
    </Fade>
  );
});

CategoryListItem.propTypes = {
  name: PropTypes.string,
  loading: PropTypes.bool
};

export default CategoryListItem;
