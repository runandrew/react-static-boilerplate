import React from "react";
import { Router, Link } from "react-static";
import { hot } from "react-hot-loader";
//
import Routes from "react-static-routes";

import "./app.scss";

const Nav = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
);

const App = () => (
  <Router>
    <div>
      <Nav />
      <Routes />
    </div>
  </Router>
);

export default hot(module)(App);
