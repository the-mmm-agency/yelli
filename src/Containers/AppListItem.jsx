import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-navi';
import PropTypes from 'prop-types';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

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

const AppListItem = ({ name, category, icon, loading }) => {
  const classes = useStyles();
  if (loading) {
    return (
      <ListItem className={classes.root} disableGutters>
        <ListItemIcon>
          <Skeleton circle height={30} width={30} />
        </ListItemIcon>
        <ListItemText
          primary={<Skeleton width="60vw" />}
          secondary={<Skeleton width="40vw" />}
        />
      </ListItem>
    );
  }
  const history = useHistory();
  const handleClick = () => {
    history.push(`/app/${name}`);
  };
  return (
    <ListItem
      button
      className={classes.root}
      disableGutters
      divider
      onClick={handleClick}
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
};

AppListItem.propTypes = {
  category: PropTypes.string,
  icon: PropTypes.string,
  loading: PropTypes.bool,
  name: PropTypes.string
};

export default AppListItem;
