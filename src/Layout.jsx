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
    '*, body': {
      scrollbarColor: 'rgba(50,50,50,0.5) transparent',
      scrollbarWidth: 'thin'
    },
    '::-moz-selection': {
      background: theme.palette.primary.main,
      color: '#fff'
    },
    '::-webkit-scrollbar': {
      height: 12,
      width: 12
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: 'transparent'
    },
    '::-webkit-scrollbar-thumb:active': {
      backgroundColor: 'rgba(30,30,30,1)'
    },
    '::-webkit-scrollbar-thumb:hover': {
      backgroundColor: 'rgba(40,40,40,0.75)',
      height: 16,
      width: 16
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: 'transparent'
    },
    '::selection': {
      background: theme.palette.primary.main,
      color: '#fff'
    },
    body: {
      [theme.breakpoints.up('sm')]: {
        '-webkit-user-select': 'auto'
      },
      '-webkit-tap-highlight-color': 'transparent',
      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none'
    }
  },
  content: {
    flexGrow: 1,
    overflow: 'hidden'
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
