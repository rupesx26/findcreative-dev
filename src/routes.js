import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
// import { AnimatePresence } from 'framer-motion';

const LoadableHome = Loadable({
  loader: async () =>
    await import(/* webpackChunkName: 'home' */ './pages/Home'),
  loading: () => <div>Loading...</div>
});

const LoadableDifference = Loadable({
  loader: async () =>
    await import(
      /* webpackChunkName: 'about' */ './pages/difference/Difference'
    ),
  loading: () => <div>Loading...</div>
});

const LoadableWork = Loadable({
  loader: () => import(/* webpackChunkName: 'services' */ './pages/work'),
  loading: () => <div>Loading...</div>
});

const LoadableNotFound = Loadable({
  loader: () => import(/* webpackChunkName: 'notfound' */ './pages/Notfound'),
  loading: () => <div>Loading...</div>
});

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoadableHome} />
      <Route path="/difference" component={LoadableDifference} />
      <Route path="/work" component={LoadableWork} />
      <Route component={LoadableNotFound} />
    </Switch>
  );
};

export default Routes;
