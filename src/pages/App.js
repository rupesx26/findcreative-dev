import React from 'react';
import { NavLink } from 'react-router-dom';

import Routes from '../routes';

const App = () => (
  <div className="app">
    <nav aria-label="main navigation">
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink exact to="/difference" activeClassName="active">
        About
      </NavLink>

      <NavLink exact to="/work" activeClassName="active">
        Services
      </NavLink>
    </nav>

    <main className="main">
      <Routes />
    </main>

    {/* <footer /> */}
  </div>
);

export default App;
