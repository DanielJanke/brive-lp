import React, { Component } from "react";
import Carousel from "nuka-carousel";

import { SectionBlue } from "../assets/styles";
import { Container, Row, Col } from "react-grid-system";
import { BigNumber, Title2, Text } from "../assets/primitives";
import Strings from "../assets/strings";
import styled from "styled-components";
import map from "../assets/img/map.png";
import RatingBox from "../view/ratingBox";

const RatingSection = () => (
  <SkewedSectionBlue>
    <NoSkew>
      <Container>
        <Row>
          <Col xs={12}>
            <BigNumber>{Strings.landingPage.ratingSection.number}</BigNumber>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Title2>{Strings.landingPage.ratingSection.title}</Title2>
          </Col>
          <Col xs={12} sm={6} offset={{ sm: 3 }}>
            <Text>{Strings.landingPage.ratingSection.description}</Text>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          {Strings.landingPage.ratingSection.sections.map((rating, i) => {
            return (
              <Col xs={2}>
                <RatingBox headline={rating.title} score={rating.scoring} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </NoSkew>
  </SkewedSectionBlue>
);

export default RatingSection;

const SkewedSectionBlue = styled(SectionBlue)`
  transform: skewY(-9deg);
  text-align: center;
`;

const NoSkew = styled.div`
  transform: skewY(9deg);
`;

const CarouselWrapper = styled.div`
  width: 100rem;
  display: flex;
  justify-content: space-between;
`;
