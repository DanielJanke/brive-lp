import React, { Component } from "react";
import { Section, SectionLight } from "../assets/styles";
import { Container, Row, Col } from "react-grid-system";
import logoImg from "../assets/img/brive_logo.png";
import { Title1, Title2, Text } from "../assets/primitives";
import Strings from "../assets/strings";
import PrimaryButton from "../view/button";
import ContactBox from "../view/contactBox";

const ContactSection = () => {
  return (
    <Section>
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
    </Section>
  );
};

export default ContactSection;
