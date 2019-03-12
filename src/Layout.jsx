/* eslint-disable no-dupe-keys */
import { CssBaseline, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';

import Auth from 'Containers/Auth';
import CreateApp from 'Containers/CreateApp';
import Header from 'Containers/Header';
import Navigation from 'Containers/Navigation';
import SideDrawer from 'Containers/SideDrawer';

const useStyles = makeStyles(theme => ({
  '@global': {
    '@font-face': {
      fontDisplay: 'auto',
      fontFamily: 'Metropolis',
      fontStyle: 'normal',
      fontWeight: 300,
      src:
        'local("Metropolis Thin"), local("Metropolis-Thin"), url("fonts/Metropolis-Thin.woff2") format("woff2")'
    },
    '@font-face': {
      fontDisplay: 'auto',
      fontFamily: 'Metropolis',
      fontStyle: 'normal',
      fontWeight: 400,
      src:
        'local("Metropolis Regular"), local("Metropolis-Regular"), url("fonts/Metropolis-Regular.woff2") format("woff2")'
    },
    '@font-face': {
      fontDisplay: 'auto',
      fontFamily: 'Metropolis',
      fontStyle: 'normal',
      fontWeight: 500,
      src:
        'local("Metropolis Medium"), local("Metropolis-Medium"), url("fonts/Metropolis-Medium.woff2") format("woff2")'
    },
    body: {
      [theme.breakpoints.up('sm')]: {
        '-webkit-user-select': 'auto'
      },
      '&:-moz-selection': {
        background: theme.palette.primary.main
      },
      '&:selection': {
        background: theme.palette.primary.main
      },
      '-webkit-tap-highlight-color': 'transparent',
      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none',
      'overflow-x': 'hidden'
    }
  },
  content: {
    flexGrow: 1,
    overflowX: 'hidden'
  },
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <CreateApp />
      <Hidden xsDown>
        <SideDrawer />
      </Hidden>
      <Auth />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
        <Hidden smUp>
          <div className={classes.toolbar} />
        </Hidden>
      </main>
      <Hidden smUp>
        <Navigation />
      </Hidden>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.node]))
  ])
};

export default Layout;
