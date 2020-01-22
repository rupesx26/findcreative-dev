import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import pageLoader from './components/loader';

const LoadableHome = Loadable({
  loader: async () =>
    await import(/* webpackChunkName: 'home' */ './pages/Home'),
  loading: () => pageLoader,
  delay: 2000, // 0.3 seconds
  timeout: 1000 // 10 seconds
});

const LoadableDifference = Loadable({
  loader: async () =>
    await import(
      /* webpackChunkName: 'about' */ './pages/difference/Difference'
    ),
  loading: () => pageLoader,
  delay: 2000, // 0.3 seconds
  timeout: 1000 // 10 seconds
});

const LoadableWork = Loadable({
  loader: () => import(/* webpackChunkName: 'services' */ './pages/work/Work'),
  loading: () => <div>Loading...</div>
});

const LoadableNotFound = Loadable({
  loader: () => import(/* webpackChunkName: 'notfound' */ './pages/Notfound'),
  loading: () => <div>Loading...</div>
});

export default () => (
  <Switch>
    <Route exact path="/" component={LoadableHome} />
    <Route path="/difference" component={LoadableDifference} />
    <Route path="/work" component={LoadableWork} />
    <Route component={LoadableNotFound} />
  </Switch>
);
