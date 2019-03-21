import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-navi';
import PropTypes from 'prop-types';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

const useStyles = makeStyles(theme => ({
  icon: {
    height: 30,
    width: 30
  },
  root: {
    borderBottom: {
      color: theme.palette.background.default,
      style: 'solid',
      width: 1
    },
    padding: theme.spacing(2)
  }
}));

const AppListItem = ({ name, category, icon, loading }) => {
  const classes = useStyles();
  if (loading) {
    return (
      <ListItem className={classes.root} disableGutters divider>
        <ListItemIcon>
          <Skeleton circle height={30} width={30} />
        </ListItemIcon>
        <ListItemText primary={<Skeleton />} secondary={<Skeleton />} />
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
  loading: PropTypes.bool,
  name: PropTypes.string
};

export default AppListItem;
