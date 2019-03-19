import { IconButton, MobileStepper, Grid } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { useState, memo } from 'react';
import SwipeableViews from 'react-swipeable-views';
import splitEvery from 'split-every';

const useStyles = makeStyles({
  list: {
    padding: 0
  },
  slide: {
    display: 'flex',
    justifyContent: 'stretch',
    overflow: 'visible'
  }
});

const SwipableAppList = memo(({ pageLength, AppComponent, apps }) => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();
  return (
    <Grid className={classes.root} container direction="column">
      <SwipeableViews
        enableMouseEvents
        index={activeStep}
        onChangeIndex={step => setActiveStep(step)}
        slideClassName={classes.slide}
        slideStyle={{ overflow: 'visible' }}
        style={{ maxWidth: '100%' }}
      >
        {splitEvery(pageLength, apps).map(list => (
          <Grid
            key={list[0].name}
            className={classes.list}
            component="ul"
            container
            item
            spacing={2}
            wrap="nowrap"
          >
            {list.map(app => {
              // eslint-disable-next-line no-param-reassign
              delete app.__typename;
              console.log(app);
              return <AppComponent key={app.id} {...app} />;
            })}
          </Grid>
        ))}
      </SwipeableViews>
      <MobileStepper
        activeStep={activeStep}
        backButton={
          <IconButton
            disabled={activeStep === 0}
            onClick={() => setActiveStep(activeStep - 1)}
          >
            <KeyboardArrowLeft />
          </IconButton>
        }
        nextButton={
          <IconButton
            disabled={activeStep === Math.ceil(apps.length / pageLength) - 1}
            onClick={() => setActiveStep(activeStep + 1)}
          >
            <KeyboardArrowRight />
          </IconButton>
        }
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
