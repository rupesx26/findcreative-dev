import React from 'react';

// import { NavLink } from 'react-router-dom';
import Routes from '../routes';
// import Navigation from '../components/navigation';
const App = () => {
  return (
    <div className="app">
      {/* <Navigation /> */}
      {/* <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink exact to="/difference" activeClassName="active">
          About
        </NavLink>

        <NavLink exact to="/work" activeClassName="active">
          Services
        </NavLink> */}

      <main className="main">
        <Routes />
      </main>

      {/* <footer /> */}
    </div>
  );
};

export default App;
