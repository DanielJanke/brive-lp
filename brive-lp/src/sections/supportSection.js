import React, { Component } from "react";
import { SectionBlue } from "../assets/styles";
import { Container, Row, Col } from "react-grid-system";
import { Title1, Title2, Text } from "../assets/primitives";
import Strings from "../assets/strings";
import styled from "styled-components";
import ScrollerComponent from "../components/ScrollerComponent";

const SupportSection = () => (
  <SectionBlue>
    <Container>
      <Row>
        <ColMargin xs={12}>
          <Title2>{Strings.landingPage.support.title}</Title2>
        </ColMargin>
      </Row>
    </Container>
    <Container fluid>
      <RowExt>
        <ScrollerComponent duration={60}>
          <ImgWrapper>
            <img
              className="margin-bottom-3"
              src={require(`../assets/img/${Strings.landingPage.support.eu}`)}
            />
          </ImgWrapper>
          <ImgWrapper>
            <img
              className="margin-bottom-3"
              src={require(`../assets/img/${Strings.landingPage.support.efre}`)}
            />
          </ImgWrapper>
          <ImgWrapper>
            <img
              className="margin-bottom-3"
              src={require(`../assets/img/${
                Strings.landingPage.support.berlin
              }`)}
            />
          </ImgWrapper>
          <ImgWrapper>
            <img
              className="margin-bottom-3"
              src={require(`../assets/img/${Strings.landingPage.support.bss}`)}
            />
          </ImgWrapper>
          <ImgWrapper>
            <img
              className="margin-bottom-3"
              src={require(`../assets/img/${Strings.landingPage.support.pt}`)}
            />
          </ImgWrapper>
          <ImgWrapper>
            <img
              className="margin-bottom-3"
              src={require(`../assets/img/${Strings.landingPage.support.zu}`)}
            />
          </ImgWrapper>
        </ScrollerComponent>
      </RowExt>
    </Container>
  </SectionBlue>
);

export default SupportSection;

const ColMargin = styled(Col)`
  margin: 0 0 1rem 0;
`;

const ImgWrapper = styled.div`
  width: 12rem;
  margin-left: 6rem;
  display: flex;
  align-items: center;
`;

const RowExt = styled(Row)`
  height: 10rem;
`;
