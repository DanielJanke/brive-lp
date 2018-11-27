import React, { Component } from "react";
import { SectionBlue } from "../assets/styles";
import { Container, Row, Col } from "react-grid-system";
import { Title1, Title2, Text } from "../assets/primitives";
import Strings from "../assets/strings";
import styled from "styled-components";

const SupportSection = () => (
  <SectionBlue>
    <Container>
      <Row>
        <ColMargin xs={12}>
          <Title2>{Strings.landingPage.support.title}</Title2>
        </ColMargin>
      </Row>
      <Row>
        <Col style={{ textAlign: "center" }} xs={6} sm={2} lg={2}>
          <img
            className="margin-bottom-3"
            src={require(`../assets/img/${Strings.landingPage.support.eu}`)}
          />
        </Col>
        <Col style={{ textAlign: "center" }} xs={6} sm={3} lg={3}>
          <img
            className="margin-bottom-3"
            src={require(`../assets/img/${Strings.landingPage.support.efre}`)}
          />
        </Col>
        <Col style={{ textAlign: "center" }} xs={6} sm={3} lg={3}>
          <img
            className="margin-bottom-3"
            src={require(`../assets/img/${Strings.landingPage.support.bss}`)}
          />
        </Col>
        <Col style={{ textAlign: "center" }} xs={6} sm={4} lg={4}>
          <img
            className="margin-bottom-3"
            src={require(`../assets/img/${Strings.landingPage.support.pt}`)}
          />
        </Col>
      </Row>
    </Container>
  </SectionBlue>
);

export default SupportSection;

const ColMargin = styled(Col)`
  margin: 0 0 1rem 0;
`;
