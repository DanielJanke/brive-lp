import React, { Component } from "react";
import { SectionLight } from "../assets/styles";
import { Container, Row, Col } from "react-grid-system";
import logoImg from "../assets/img/brive_logo.png";
import { Title1, Title2, Text } from "../assets/primitives";
import Strings from "../assets/strings";
import PrimaryButton from "../view/button";
import iPhone from "../assets/img/brive_app_iphone.png";
import styled from "styled-components";

const HeaderSection = () => (
  <SectionLightExt>
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
        <Col offset={{ md: 1 }} xs={12} sm={12} md={6} lg={6}>
          <ImgContainer>
            <Img src={iPhone} />
          </ImgContainer>
        </Col>
      </Row>
    </Container>
  </SectionLightExt>
);

export default HeaderSection;

const SectionLightExt = styled(SectionLight)`
  overflow: hidden;
`;

const Img = styled.img`
  //width: 100%;
`;

const ImgContainer = styled.div`
  padding: 1rem;
`;
