import React, { Component } from "react";
import { Section, SectionLight } from "../assets/styles";
import { Container, Row, Col } from "react-grid-system";
import logoImg from "../assets/img/brive_logo.png";
import { Title1, Title2, Text } from "../assets/primitives";
import Strings from "../assets/strings";
import Box from "../view/box";
import styled from "styled-components";

const AdvantagesSection = () => {
  return (
    <SectionLightMargin>
      <Container>
        <Row>
          <Col xs={12} sm={5} style={{ marginBottom: 16 }}>
            <Title2>{Strings.landingPage.advantages.title}</Title2>
          </Col>
        </Row>
        <Row justify="center">
          {Strings.landingPage.advantages.sections.map((box, index) => {
            return (
              <Col
                style={{ display: "flex" }}
                key={index}
                className="margin-bottom-3"
                xs={10}
                sm={4}
              >
                <Box headline={box.title} text={box.description} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </SectionLightMargin>
  );
};

export default AdvantagesSection;

const SectionLightMargin = styled(SectionLight)`
  margin: -8rem 0 0 0;
  padding: 14rem 0 0 0;
  `