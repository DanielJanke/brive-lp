import React, { Component } from "react";
import { SectionLight } from "../assets/styles";
import { Container, Row, Col } from "react-grid-system";
import logoImg from "../assets/img/brive_logo_white.svg";
import styled from "styled-components";
import { Link } from "@reach/router";
import Strings from "../assets/strings";

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <RowExt>
          <Col style={ColMargin} xs={12} sm={2}>
            <Link exact to="/">
              <Logo src={logoImg} />
            </Link>
          </Col>
          <Col style={ColMargin} xs={12} sm={2} offset={{ sm: 4 }}>
            <Link exact to={Strings.routing.imprint}>
              {Strings.routing.imprintText}
            </Link>
          </Col>
          <Col style={ColMargin} xs={12} sm={2}>
            <Link exact to={Strings.routing.privacePolicy}>
              {Strings.routing.privacePolicyText}
            </Link>
          </Col>
        </RowExt>
      </Container>
    </FooterSection>
  );
};

export default Footer;

const FooterSection = styled.div`
  padding: 5rem 0;
  width: 100vw;
  background-image: linear-gradient(-135deg, #232900 0%, #001f1b 100%);
`;

const RowExt = styled(Row)`
  justify-content: space-between !important;
`;

const Logo = styled.img`
  height: 2rem;
`;

const ColMargin = {
  marginBottom: 32,
  textAlign: "center"
};
