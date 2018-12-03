import React, { Component } from "react";
import { SectionLight } from "../assets/styles";
import { Container, Row, Col } from "react-grid-system";
import logoImg from "../assets/img/brive_logo.png";

const Footer = () => {
  return (
    <SectionLight>
      <Container>
        <Row>
          <img src={logoImg} />
        </Row>
      </Container>
    </SectionLight>
  );
};

export default Footer;
