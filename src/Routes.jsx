import { lazy, mount, route } from 'navi';
import React from 'react';

import Home from 'Pages/Home';

const routes = mount({
  '/': route({
    title: 'Yelli',
    view: <Home />
  }),
  '/app': lazy(() => import('Pages/Info')),
  '/categories': lazy(() => import('Pages/Categories')),
  '/category': lazy(() => import('Pages/Category')),
  '/new': lazy(() => import('Pages/New')),
  '/search': lazy(() => import('Pages/Search')),
  '/toplist': lazy(() => import('Pages/TopList'))
});

export default routes;
