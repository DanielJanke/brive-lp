import { Component } from "react";
import React from "react";
import {SectionLight } from "../assets/styles";
import Footer from "../sections/Footer";
import { Title1, Title2, Text } from "../assets/primitives";

export default class Imprint extends Component {
  constructor(props) {
    super(props);
    this.contactRef = React.createRef();
  }

  render() {
    return (
      <React.Fragment>
        <SectionLight>
          <Title1>
            Impressum
          </Title1>
        </SectionLight>
        <Footer />
      </React.Fragment>
    );
  }
}
