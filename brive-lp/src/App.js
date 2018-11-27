import React from "react";
import { Router, Link } from "react-static";
import { hot } from "react-hot-loader";
//
import Routes from "react-static-routes";

import "./app.css";
import { setConfiguration } from "react-grid-system";
import { containerWidthsConfid } from "./assets/styleconfig";

const App = () => {
  setConfiguration(containerWidthsConfid);
  return (
    <Router>
      <div>
        {/*<nav>*/}
        {/*<Link exact to="/">*/}
        {/*Home*/}
        {/*</Link>*/}
        {/*<Link to="/about">About</Link>*/}
        {/*<Link to="/blog">Blog</Link>*/}
        {/*</nav>*/}
        <div className="content">
          <Routes />
        </div>
      </div>
    </Router>
  );
};

export default hot(module)(App);
