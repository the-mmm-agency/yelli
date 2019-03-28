import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { useState, memo, lazy } from 'react';
import splitEvery from 'split-every';

const MobileStepper = lazy(() => import('@material-ui/core/MobileStepper'));
const SwipeableViews = lazy(() => import('react-swipeable-views'));

const useStyles = makeStyles({
  list: {
    justifyContent: 'center',
    padding: 0
  },
  slide: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'visible'
  },
  stepper: {
    justifyContent: 'center !important',
    minWidth: '100%'
  }
});

const SwipableAppList = memo(({ pageLength, AppComponent, apps }) => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();
  if (apps.length <= pageLength) {
    return (
      <Grid
        className={classes.list}
        component="ul"
        container
        item
        wrap="nowrap"
      >
        {apps.map(app => {
          // eslint-disable-next-line no-param-reassign
          delete app.__typename;
          return <AppComponent key={app.id} {...app} />;
        })}
      </Grid>
    );
  }
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
        className={classes.stepper}
        position="static"
        steps={Math.ceil(apps.length / pageLength)}
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
