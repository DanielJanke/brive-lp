import React, { Component } from "react";
import { Section, SectionLight } from "../assets/styles";
import { Container, Row, Col } from "react-grid-system";
import logoImg from "../assets/img/brive_logo.png";
import { Title1, Title2, Text } from "../assets/primitives";
import Strings from "../assets/strings";
import Box from "../view/box";
import styled from "styled-components";

const SolutionOverviewSection = () => {
  return (
    <SectionExtended>
      <Container>
        <Row>
          <Col xs={12} sm={5} style={{ marginBottom: 16 }}>
            <Title2 light>{Strings.landingPage.hotItWorks.headline}</Title2>
            <Text light>{Strings.landingPage.hotItWorks.text}</Text>
          </Col>
        </Row>
        <Row justify="center">
          {Strings.landingPage.hotItWorks.boxes.map((box, index) => {
            return (
              <ColFlex key={index} className="margin-bottom-3" xs={10} sm={3}>
                <Box number={index + 1} headline={box.title} text={box.text} />
              </ColFlex>
            );
          })}
        </Row>
      </Container>
    </SectionExtended>
  );
};

export default SolutionOverviewSection;

const SectionExtended = styled(Section)`
  padding-bottom: 20rem;
  margin-bottom: -15rem;
`;

const ColFlex = styled(Col)`
  display: flex;
`;
