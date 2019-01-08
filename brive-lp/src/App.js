import React from "react";
import { Router, Link } from "react-static";
import { hot } from "react-hot-loader";
import ReactGA from "react-ga";
//
import Routes from "react-static-routes";

import "./app.css";
import { setConfiguration } from "react-grid-system";
import { containerWidthsConfid } from "./assets/styleconfig";

class App extends React.PureComponent {
  componentDidMount() {
    ReactGA.initialize("UA-131835509-1", {
      debug: false
    });
    ReactGA.pageview(window.location.pathname + window.location.search);

    setConfiguration(containerWidthsConfid);
  }

  render() {
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
  }
}

export default hot(module)(App);
