import { CssBaseline, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { lazy, Suspense } from 'react';

import ElasticScroll from 'Components/ElasticScroll';
import Header from 'Containers/Header';
import Navigation from 'Containers/Navigation';
import SideDrawer from 'Containers/SideDrawer';

import './fonts.css';

const IosInstallPrompt = lazy(() => import('Components/IosInstallPrompt'));
const Auth = lazy(() => import('Containers/Auth'));
const AppUpdate = lazy(() => import('Containers/AppUpdate'));

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
      '-webkit-tap-highlight-color': 'transparent',
      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none',
      overflow: 'hidden',
      [theme.breakpoints.up('sm')]: {
        '-webkit-user-select': 'auto'
      }
    }
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflowX: 'hidden',
    overflowY: 'scroll'
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
      <Hidden smDown>
        <SideDrawer />
      </Hidden>
      <Suspense fallback={null}>
        <Auth />
        <IosInstallPrompt />
        <AppUpdate />
      </Suspense>
      <ElasticScroll>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
          <Hidden mdUp>
            <div className={classes.toolbar} />
          </Hidden>
          <Hidden mdUp>
            <div className={classes.toolbar} />
          </Hidden>
        </main>
      </ElasticScroll>
      <Hidden mdUp>
        <Navigation />
      </Hidden>
    </div>
  );
};

export default Layout;
