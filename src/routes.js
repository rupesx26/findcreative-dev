import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Loadable from 'react-loadable';
import pageLoader from './components/loader';
import { AnimatePresence } from 'framer-motion';

const LoadableHome = Loadable({
  loader: async () =>
    await import(/* webpackChunkName: 'home' */ './pages/Home'),
  loading: () => pageLoader
});

const LoadableDifference = Loadable({
  loader: async () =>
    await import(
      /* webpackChunkName: 'about' */ './pages/difference/Difference'
    ),
  loading: () => pageLoader
});

const LoadableWork = Loadable({
  loader: () => import(/* webpackChunkName: 'services' */ './pages/work/Work'),
  loading: () => <div>Loading...</div>
});

const LoadableNotFound = Loadable({
  loader: () => import(/* webpackChunkName: 'notfound' */ './pages/Notfound'),
  loading: () => <div>Loading...</div>
});

const Routes = () => {
  let location = useLocation();
  return (
    <Route
      render={({ location }) => (
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={LoadableHome} />
            <Route path="/difference" component={LoadableDifference} />
            <Route path="/work" component={LoadableWork} />
            <Route component={LoadableNotFound} />
          </Switch>
        </AnimatePresence>
      )}
    />
  );
};

export default Routes;
