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
    await import(/* webpackChunkName: 'difference' */ './pages/difference'),
  loading: () => <div>Loading...</div>
});

const LoadableWork = Loadable({
  loader: () => import(/* webpackChunkName: 'work' */ './pages/work'),
  loading: () => <div>Loading...</div>
});

const LoadableConnect = Loadable({
  loader: () => import(/* webpackChunkName: 'connect' */ './pages/connect'),
  loading: () => <div>Loading...</div>
});

const LoadableNotFound = Loadable({
  loader: () => import(/* webpackChunkName: 'notfound' */ './pages/Notfound'),
  loading: () => <div>Loading...</div>
});

const LoadableHrx = Loadable({
  loader: () => import(/* webpackChunkName: 'hrx' */ './pages/hrx'),
  loading: () => <div>Loading...</div>
});

const LoadableNiharGold = Loadable({
  loader: () => import(/* webpackChunkName: 'nihargold' */ './pages/nihargold'),
  loading: () => <div>Loading...</div>
});

const LoadableKateSpade = Loadable({
  loader: () => import(/* webpackChunkName: 'katespade' */ './pages/katespade'),
  loading: () => <div>Loading...</div>
});

const LoadableThambbi = Loadable({
  loader: () => import(/* webpackChunkName: 'thambbi' */ './pages/thambbi'),
  loading: () => <div>Loading...</div>
});

const LoadableHero = Loadable({
  loader: () => import(/* webpackChunkName: 'hero' */ './pages/hero'),
  loading: () => <div>Loading...</div>
});

const LoadableCoco = Loadable({
  loader: () => import(/* webpackChunkName: 'coco' */ './pages/cocosoul'),
  loading: () => <div>Loading...</div>
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
