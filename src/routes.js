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

const LoadableSussegado = Loadable({
  loader: () => import(/* webpackChunkName: 'sussegado' */ './pages/sussegado'),
  loading: () => <PageLoader />
});

const LoadableRapidrupee = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'rapidrupee' */ './pages/rapidrupee'),
  loading: () => <PageLoader />
});

const LoadableGravity = Loadable({
  loader: () => import(/* webpackChunkName: 'gravity' */ './pages/gravity'),
  loading: () => <PageLoader />
});

const LoadableCareers = Loadable({
  loader: () => import(/* webpackChunkName: 'career' */ './pages/careers'),
  loading: () => <PageLoader />
});

const LoadableCareersInternal = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'career' */ './pages/careers/internal'),
  loading: () => <PageLoader />
});

const LoadablePolicy = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'policy' */ './pages/policy/policy'),
  loading: () => <PageLoader />
});

const LoadableTerms = Loadable({
  loader: () => import(/* webpackChunkName: 'terms' */ './pages/policy/terms'),
  loading: () => <PageLoader />
});

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoadableHome} />
      <Route exact path="/difference" component={LoadableDifference} />
      <Route exact path="/work" component={LoadableWork} />
      <Route exact path="/connect" component={LoadableConnect} />
      <Route exact path="/work/hrithik-roshan" component={LoadableHrx} />
      <Route exact path="/work/nihar-gold" component={LoadableNiharGold} />
      <Route exact path="/work/kate-spade" component={LoadableKateSpade} />
      <Route exact path="/work/thambbi" component={LoadableThambbi} />
      <Route exact path="/work/hero-talkies" component={LoadableHero} />
      <Route exact path="/work/cocosoul" component={LoadableCoco} />
      <Route
        exact
        path="/work/sussegado-coffee"
        component={LoadableSussegado}
      />
      <Route exact path="/work/rapid-rupee" component={LoadableRapidrupee} />
      <Route exact path="/work/socranos-gravity" component={LoadableGravity} />
      <Route exact path="/policy" component={LoadablePolicy} />
      <Route exact path="/terms" component={LoadableTerms} />
      <Route
        path="/careers"
        render={({ match: { path } }) => (
          <div>
            <Route exact path={path} component={LoadableCareers} />
            <Route
              exact
              path={`${path}/:id`}
              component={LoadableCareersInternal}
            />
          </div>
        )}
      />
      <Route component={LoadableNotFound} />
    </Switch>
  );
};

export default Routes;
