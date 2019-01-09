import React, { Component } from "react";
import styled from "styled-components";
import { Section, SectionLight } from "../assets/styles";
import { Container, Row, Col } from "react-grid-system";
import logoImg from "../assets/img/brive_logo.png";
import { Title1, Title2, Text } from "../assets/primitives";
import Strings from "../assets/strings";
import PrimaryButton from "../view/button";
import ContactBox from "../view/contactBox";

const ContactSection = () => {
  return (
    <SectionExt id="contact-box">
      <Container>
        <Row justify="center">
          <Col xs={12} sm={8}>
            <ContactBox
              id="contactBox"
              headline={Strings.landingPage.contact.headline}
            />
          </Col>
        </Row>
      </Container>
    </SectionExt>
  );
};

export default ContactSection;

const SectionExt = styled(Section)`
  padding-top: 6rem;
  padding-bottom: 6rem;
`;
