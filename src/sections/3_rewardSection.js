import React, { Component } from "react";
import { SectionBlue } from "../assets/styles";
import { Container, Row, Col, Visible } from "react-grid-system";
import { BigNumber, Title2, Text, SmallText } from "../assets/primitives";
import Strings from "../assets/strings";
import styled, { keyframes } from "styled-components";
import card from "../assets/img/brive_credit_card.svg";
import RatingBox from "../view/ratingBox";
// import ReactVisibilitySensor from "react-visibility-sensor";

export default class RewardSection extends React.PureComponent {
  state = {
    isVisible: false
  };

  onVisibilityChange = visible => {
    console.log(this.state.isVisible, visible);

    this.setState({
      isVisible: true
    });
  };

  render() {
    return (
      <SkewedSectionBlue>
        <NoSkew>
          <Container>
            <Row>
              <Col xs={12}>
                <BigNumber>
                  {Strings.landingPage.rewardSection.number}
                </BigNumber>
              </Col>
            </Row>
            <Row align="center">
              <Col xs={12}>
                <Title2>{Strings.landingPage.rewardSection.title}</Title2>
              </Col>
              <Col xs={12} sm={6} offset={{ sm: 3 }}>
                <Text>{Strings.landingPage.rewardSection.description}</Text>
              </Col>
              {/* <ReactVisibilitySensor
                onChange={visible => {
                  this.onVisibilityChange(visible);
                }}
              > */}
              <CCContainer>
                <CreditCard1 src={card} />
                <CreditCard2 animation={true} src={card} />
                <CreditCard3 src={card} />
              </CCContainer>
              {/* </ReactVisibilitySensor> */}
              <SmallText style={style.noticeText}>
                {Strings.landingPage.rewardSection.notice}
              </SmallText>
            </Row>
          </Container>
        </NoSkew>
      </SkewedSectionBlue>
    );
  }
}

const style = {
  noticeText: {
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16
  }
};

const SkewedSectionBlue = styled(SectionBlue)`
  transform: skewY(-9deg);
  text-align: center;
  overflow: hidden;
  padding-bottom: 8rem;
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
`;

const CreditCard2Animation = keyframes`
  from {
    transform: translateY(5rem);
    opacity: 0
  }

  to {
    transform: translateY(0);
    opacity: 1
  }
`;

const CreditCard1 = styled.img`
  opacity: 0.3;
  position: absolute;
  transform: rotate(-7deg) translateY(5rem) translateX(-18rem);
`;

const CreditCard2 = styled.img`
  z-index: 10;
  animation: ${CreditCard2Animation} 2s ease-in-out;
`;

const CreditCard3 = styled.img`
  opacity: 0.3;
  transform: rotate(7deg) translateY(5rem) translateX(18rem);
  position: absolute;
`;
