import React, { Component } from "react";
import { SectionLight } from "../assets/styles";
import { Container, Row, Col } from "react-grid-system";
import logoImg from "../assets/img/brive_logo.png";
import styled from "styled-components";
import { Link } from "react-static";

const Footer = () => {
  return (
    <SectionLightExt>
      <Container>
        <RowExt>
          <Logo src={logoImg} />
          <Link exact to="/impressum">
            Impressum
          </Link>
        </RowExt>
      </Container>
    </SectionLightExt>
  );
};

export default Footer;

const SectionLightExt = styled(SectionLight)`
padding: 5rem 0;
`

const RowExt = styled(Row)`
justify-content: space-between !important;
`

const Logo = styled.img`
  height: 2rem;
  `