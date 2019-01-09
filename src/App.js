import React from "react";
import { Root, Routes } from "react-static";
import { Link } from "@reach/router";
import ReactGA from "react-ga";

import { setConfiguration } from "react-grid-system";
import { containerWidthsConfid } from "./assets/styleconfig";

import "./app.css";

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
      <Root>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
        </nav> */}
        <div className="content">
          <Routes />
        </div>
      </Root>
    );
  }
}

export default App;
