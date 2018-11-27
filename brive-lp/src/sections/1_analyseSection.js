import React, { Component } from "react";
import { SectionBlue } from "../assets/styles";
import { Container, Row, Col } from "react-grid-system";
import { BigNumber, Title2, Text } from "../assets/primitives";

import Strings from "../assets/strings";
import styled from "styled-components";
import map from "../assets/img/map.png";

const AnalyseSection = () => (
  <SkewedSectionBlue>
    <NoSkew>
      <Container>
        <Row>
          <Col xs={12}>
            <BigNumber>{Strings.landingPage.analyseSection.number}</BigNumber>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Title2>{Strings.landingPage.analyseSection.title}</Title2>
          </Col>
          <Col xs={12} sm={6} offset={{ sm: 3 }}>
            <Text>{Strings.landingPage.analyseSection.description}</Text>
          </Col>
          <Col xs={12}>
            <img src={map} />
          </Col>
        </Row>
      </Container>
    </NoSkew>
  </SkewedSectionBlue>
);

export default AnalyseSection;

const SkewedSectionBlue = styled(SectionBlue)`
  transform: skewY(-9deg);
  text-align: center;
`;

const NoSkew = styled.div`
  transform: skewY(9deg);
`;
