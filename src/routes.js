import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './pages/Home'),
  loading: () => <div>Loading...</div>
});

const LoadableDifference = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'about' */ './pages/difference/Difference'),
  loading: () => <div>Loading...</div>
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
