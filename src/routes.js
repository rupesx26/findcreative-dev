import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import PageLoader from './components/loader';
// import { AnimatePresence } from 'framer-motion';

const LoadableHome = Loadable({
  loader: async () =>
    await import(/* webpackChunkName: 'home' */ './pages/Home'),
  loading: () => <PageLoader />
});

const LoadableDifference = Loadable({
  loader: async () =>
    await import(/* webpackChunkName: 'difference' */ './pages/difference'),
  loading: () => <PageLoader />
});

const LoadableWork = Loadable({
  loader: () => import(/* webpackChunkName: 'work' */ './pages/work'),
  loading: () => <PageLoader />
});

const LoadableConnect = Loadable({
  loader: () => import(/* webpackChunkName: 'connect' */ './pages/connect'),
  loading: () => <PageLoader />
});

const LoadableNotFound = Loadable({
  loader: () => import(/* webpackChunkName: 'notfound' */ './pages/Notfound'),
  loading: () => <PageLoader />
});

const LoadableHrx = Loadable({
  loader: () => import(/* webpackChunkName: 'hrx' */ './pages/hrx'),
  loading: () => <PageLoader />
});

const LoadableNiharGold = Loadable({
  loader: () => import(/* webpackChunkName: 'nihargold' */ './pages/nihargold'),
  loading: () => <PageLoader />
});

const LoadableKateSpade = Loadable({
  loader: () => import(/* webpackChunkName: 'katespade' */ './pages/katespade'),
  loading: () => <PageLoader />
});

const LoadableThambbi = Loadable({
  loader: () => import(/* webpackChunkName: 'thambbi' */ './pages/thambbi'),
  loading: () => <PageLoader />
});

const LoadableHero = Loadable({
  loader: () => import(/* webpackChunkName: 'hero' */ './pages/hero'),
  loading: () => <PageLoader />
});

const LoadableCoco = Loadable({
  loader: () => import(/* webpackChunkName: 'coco' */ './pages/cocosoul'),
  loading: () => <PageLoader />
});

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoadableHome} />
      <Route path="/difference" component={LoadableDifference} />
      <Route path="/work" component={LoadableWork} />
      <Route path="/connect" component={LoadableConnect} />
      <Route exact path="/hrithik-roshan" component={LoadableHrx} />
      <Route exact path="/nihar-gold" component={LoadableNiharGold} />
      <Route exact path="/kate-spade" component={LoadableKateSpade} />
      <Route exact path="/thambbi" component={LoadableThambbi} />
      <Route exact path="/hero-talkies" component={LoadableHero} />
      <Route exact path="/cocosoul" component={LoadableCoco} />
      <Route component={LoadableNotFound} />
    </Switch>
  );
};

export default Routes;
