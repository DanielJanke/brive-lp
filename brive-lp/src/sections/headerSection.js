import React from "react";
import { scrollTo } from "react-static";
import { Container, Row, Col } from "react-grid-system";
import { Title1, Title2, Text } from "../assets/primitives";
import styled from "styled-components";
import { SectionLight } from "../assets/styles";
import logoImg from "../assets/img/brive_logo.svg";
import Strings from "../assets/strings";
import PrimaryButton from "../view/button";
import iPhone from "../assets/img/brive_app_iphone.png";
import iPhone2 from "../assets/img/brive_app_iphone_2.png";
import iPhone3 from "../assets/img/brive_app_iphone_3.png";
import { media } from "../assets/styleconfig";

const HeaderSection = () => {
  const scrollToElement = () => {
    const element = document.getElementById("contact-box");
    scrollTo(element);
  };

  return (
    <SectionLightExt>
      <Container>
        <Row>
          <Col
            style={{ textAlign: "center" }}
            xs={6}
            sm={6}
            md={3}
            lg={2}
            offset={{ xs: 3, sm: 3, md: 0 }}
          >
            <img className="margin-bottom-3" src={logoImg} />
          </Col>
        </Row>
        <Row style={{ height: 440 }} align="center">
          <ColExt sm={12} lg={6}>
            <Title1 className="margin-bottom-1">
              {Strings.landingPage.header.headline}
            </Title1>
            <Text style={styles.text}>{Strings.landingPage.header.text}</Text>
            <PrimaryButton
              onClick={scrollToElement}
              text={Strings.landingPage.header.button}
            />
          </ColExt>
          <ImgContainer>
            <Img src={iPhone} />
            <Img2 src={iPhone2} />
            <Img3 src={iPhone3} />
          </ImgContainer>
        </Row>
      </Container>
    </SectionLightExt>
  );
};

export default HeaderSection;

const styles = {
  text: {
    marginBottom: 24
  }
};

const SectionLightExt = styled(SectionLight)`
  overflow: hidden;
  z-index: -4;
`;

const ColExt = styled(Col)`
  ${media.md`text-align: left`}
  ${media.sm`text-align: center`}
`;

const Img = styled.img`
  height: 30rem;
  margin: -4rem auto 0 auto;
  ${media.md`margin-top: 2rem;`}
  ${media.sm`margin-top: 2rem;`}
  z-index: 5;
`;

const Img2 = styled(Img)`
  transform: scale(0.9) translateX(-4rem);
  display: block;
  z-index: 4;
  ${media.lg`display: none`}
  ${media.md`display: none`}
  ${media.sm`display: none`}
`;

const Img3 = styled(Img)`
  transform: scale(0.8) translateX(-10rem);
  z-index: 3;
  display: block;
  ${media.lg`display: none`}
  ${media.md`display: none`}
  ${media.sm`display: none`}
`;

const ImgContainer = styled.div`
  padding: 1rem 1rem 1rem 2rem;
  display: flex;
  flex: 1;
`;
