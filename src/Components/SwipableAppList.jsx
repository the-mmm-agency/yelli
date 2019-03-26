import { MobileStepper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { useState, memo } from 'react';
import SwipeableViews from 'react-swipeable-views';
import splitEvery from 'split-every';

const useStyles = makeStyles(theme => ({
  list: {
    [theme.breakpoints.up('sm')]: {
      bottom: theme.spacing(1),
      top: theme.spacing(1)
    },
    padding: {
      left: theme.spacing(1),
      right: theme.spacing(1)
    }
  },
  slide: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'visible'
  }
}));

const SwipableAppList = memo(({ pageLength, AppComponent, apps }) => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justifyContent="center"
    >
      <SwipeableViews
        enableMouseEvents
        index={activeStep}
        onChangeIndex={step => setActiveStep(step)}
        slideClassName={classes.slide}
        style={{
          maxWidth: '100%'
        }}
      >
        {splitEvery(pageLength, apps).map(list => (
          <Grid
            key={list[0].name}
            className={classes.list}
            component="ul"
            container
            item
            wrap="nowrap"
          >
            {list.map(app => {
              // eslint-disable-next-line no-param-reassign
              delete app.__typename;
              return <AppComponent key={app.id} {...app} />;
            })}
          </Grid>
        ))}
      </SwipeableViews>
      <MobileStepper
        activeStep={activeStep}
        position="static"
        steps={Math.ceil(apps.length / pageLength)}
        style={{
          justifyContent: 'center'
        }}
      />
    </Grid>
  );
});

SwipableAppList.propTypes = {
  AppComponent: PropTypes.element.isRequired,
  apps: PropTypes.object.isRequired,
  pageLength: PropTypes.number
};

export default SwipableAppList;
