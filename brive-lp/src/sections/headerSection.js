import React, { Component } from "react";
import { SectionLight } from "../assets/styles";
import { Container, Row, Col } from "react-grid-system";
import logoImg from "../assets/img/brive_logo.png";
import { Title1, Title2, Text } from "../assets/primitives";
import Strings from "../assets/strings";
import PrimaryButton from "../view/button";

const HeaderSection = () => {
  return (
    <SectionLight>
      <Container>
        <Row>
          <Col style={{ textAlign: "center" }} xs={6} sm={6} lg={2}>
            <img className="margin-bottom-3" src={logoImg} />
          </Col>
        </Row>
        <Row style={{ height: 440 }} align="center">
          <Col sm={12} lg={5}>
            <Title1 className="margin-bottom-1">
              {Strings.landingPage.header.headline}
            </Title1>
            <PrimaryButton text={Strings.landingPage.header.button} />
          </Col>
        </Row>
      </Container>
    </SectionLight>
  );
};

export default HeaderSection;
