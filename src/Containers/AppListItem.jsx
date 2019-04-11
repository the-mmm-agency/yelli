import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

import Skeleton from 'Components/Skeleton';

const useStyles = makeStyles(theme => ({
  category: {
    fontWeight: 500
  },
  icon: {
    height: 50,
    width: 50
  },
  name: {
    fontWeight: 500,
    width: '100%'
  },
  root: {
    padding: theme.spacing(2)
  }
}));

const AppListItem = memo(
  ({ prefetchApp, handleClick, category, name, icon, loading }) => {
    const classes = useStyles();
    if (loading) {
      return (
        <ListItem className={classes.root} disableGutters divider>
          <ListItemIcon>
            <Skeleton circle height={50} width={50} />
          </ListItemIcon>
          <ListItemText
            primary={<Skeleton width="60vw" />}
            secondary={<Skeleton width="40vw" />}
          />
        </ListItem>
      );
    }
    return (
      <ListItem
        button
        className={classes.root}
        disableGutters
        divider
        onClick={handleClick}
        onFocus={() => prefetchApp()}
        onMouseOver={() => prefetchApp()}
      >
        <ListItemIcon>
          <img alt={name} className={classes.icon} src={icon} />
        </ListItemIcon>
        <ListItemText
          primary={name}
          primaryTypographyProps={{ className: classes.name }}
          secondary={category.name}
          secondaryTypographyProps={{
            className: classes.category,
            color: 'textSecondary',
            component: 'p',
            variant: 'caption'
          }}
        />
      </ListItem>
    );
  }
);

AppListItem.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string
  }),
  handleClick: PropTypes.func,
  icon: PropTypes.string,
  loading: PropTypes.bool,
  name: PropTypes.string,
  prefetchApp: PropTypes.func
};

export default AppListItem;
