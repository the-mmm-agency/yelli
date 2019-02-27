import { lazy, mount, route } from 'navi';
import React from 'react';

import Home from 'Pages/Home';

const routes = mount({
  '/': route({
    title: 'Yelli',
    view: <Home />
  }),
  '/app': lazy(() => import('Pages/Info')),
  '/category': lazy(() => import('Pages/Category')),
  '/search': lazy(() => import('Pages/Search'))
});

export default routes;
