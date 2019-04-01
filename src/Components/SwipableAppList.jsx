import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    '-webkit-overflow-scrolling': 'touch',
    '-webkit-scroll-snap-points-x': 'repeat(100%)',
    '-webkit-scroll-snap-type': 'manditory',
    listStyle: 'none',
    margin: {
      left: theme.spacing(-3),
      right: theme.spacing(-3)
    },
    overflowX: 'scroll',
    overflowY: 'hidden',
    'scroll-snap-type': 'x mandatory',
    whiteSpace: 'nowrap'
  }
}));

const SwipableAppList = memo(({ AppComponent, apps }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} component="ul" container item wrap="nowrap">
      {apps.map(app => {
        // eslint-disable-next-line no-param-reassign
        delete app.__typename;
        return <AppComponent key={app.id} {...app} />;
      })}
    </Grid>
  );
});

SwipableAppList.propTypes = {
  AppComponent: PropTypes.element.isRequired,
  apps: PropTypes.object.isRequired
};

export default SwipableAppList;
