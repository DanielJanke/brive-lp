import React, { Component } from "react";
import Carousel from "nuka-carousel";

import { SectionBlue } from "../assets/styles";
import { Container, Row, Col } from "react-grid-system";
import { BigNumber, Title2, Text } from "../assets/primitives";
import Strings from "../assets/strings";
import styled from "styled-components";

const ImprovementSection = () => (
  <SkewedSectionBlue>
    <NoSkew>
      <Container>
        <Row>
          <Col xs={12}>
            <BigNumber>
              {Strings.landingPage.improvementSection.number}
            </BigNumber>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Title2>{Strings.landingPage.improvementSection.title}</Title2>
          </Col>
          <Col xs={12} sm={6} offset={{ sm: 3 }}>
            <Text>{Strings.landingPage.improvementSection.description}</Text>
          </Col>
        </Row>
        <RowMargin>
          <TextContainer>
            <div>Verbrauchskosten</div>
            <div>Einsparung mit BRIVE</div>
          </TextContainer>
          <BarContainer>
            <FullBar percentage={79}/>
            <ImprovementBar percentage={21}>7 – 21%</ImprovementBar>
          </BarContainer>
          <TextContainer>
            <div>Wartung & Verschleiß</div>
            <div>Einsparung mit BRIVE</div>
          </TextContainer>
          <BarContainer>
            <FullBar percentage={84}/>
            <ImprovementBar percentage={16}>8 – 16%</ImprovementBar>
          </BarContainer>
          <TextContainer>
            <div>Unfallkosten</div>
            <div>Einsparung mit BRIVE</div>
          </TextContainer>
          <BarContainer>
            <FullBar percentage={75}/>
            <ImprovementBar percentage={25}>14 – 25%</ImprovementBar>
          </BarContainer>
        </RowMargin>
      </Container>
    </NoSkew>
  </SkewedSectionBlue>
);

export default ImprovementSection;

const SkewedSectionBlue = styled(SectionBlue)`
  transform: skewY(-9deg);
  text-align: center;
  padding: 2rem 0 0 0;
`;

const NoSkew = styled.div`
  transform: skewY(9deg);
`;

const RowMargin = styled(Row)`
  margin: 4rem 0 10rem 0;
`;

const BarContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  padding: 1rem;
  margin-bottom: 2rem;
`;

const FullBar = styled.div`
  flex: ${(props) => {return props.percentage}};
  height: 5rem;
  background-color: #425759;
  border-radius: 20px 0 0 20px;
`;

const ImprovementBar = styled.div`
  flex: ${(props) => {return props.percentage}};
  background-image: linear-gradient(
    -135deg,
    #90a900 0%,
    #4bb04e 52%,
    #00b8a3 100%
  );
  border-radius: 0 20px 20px 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;
  justify-content: space-between;
  padding: 0 1rem;
`;
