import React, { Component } from "react";
import Carousel from "nuka-carousel";

import { SectionBlue } from "../assets/styles";
import { Container, Row, Col } from "react-grid-system";
import { BigNumber, Title2, Text } from "../assets/primitives";
import Strings from "../assets/strings";
import styled from "styled-components";
import card from "../assets/img/brive_credit_card.svg";
import RatingBox from "../view/ratingBox";

const RewardSection = () => (
  <SkewedSectionBlue>
    <NoSkew>
      <Container>
        <Row>
          <Col xs={12}>
            <BigNumber>{Strings.landingPage.rewardSection.number}</BigNumber>
          </Col>
        </Row>
        <Row align='center'>
          <Col xs={12}>
            <Title2>{Strings.landingPage.rewardSection.title}</Title2>
          </Col>
          <Col xs={12} sm={6} offset={{ sm: 3 }}>
            <Text>{Strings.landingPage.rewardSection.description}</Text>
          </Col>
          <CCContainer>
            <img src={card} />
          </CCContainer>
        </Row>
      </Container>
    </NoSkew>
  </SkewedSectionBlue>
);

export default RewardSection;

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

const CCContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  `