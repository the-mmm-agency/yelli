import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-navi';
import PropTypes from 'prop-types';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

const useStyles = makeStyles(theme => ({
  icon: {
    height: 40,
    width: 40
  },
  root: {
    padding: theme.spacing(1)
  }
}));

const AppListItem = ({ id, name, category, icon, loading }) => {
  const classes = useStyles();
  if (loading) {
    return (
      <ListItem disableGutters divider>
        <ListItemIcon>
          <Skeleton circle height={40} width={40} />
        </ListItemIcon>
        <ListItemText primary={<Skeleton />} secondary={<Skeleton />} />
      </ListItem>
    );
  }
  const history = useHistory();
  const handleClick = () => {
    history.push(`/app/${id}`);
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
      <ListItemText primary={name} secondary={category} />
    </ListItem>
  );
};

AppListItem.propTypes = {
  category: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  loading: PropTypes.bool,
  name: PropTypes.string
};

export default AppListItem;
