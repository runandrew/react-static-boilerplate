import React from "react";
import { Router, Link } from "react-static";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import store from "./lib/redux/store";

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
  <Provider store={store}>
    <Router>
      <div>
        <Nav />
        <Routes />
      </div>
    </Router>
  </Provider>
);

export default hot(module)(App);
