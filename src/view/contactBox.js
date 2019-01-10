import React, { Component } from "react";
import { Link } from "react-static";
import { Row, Col } from "react-grid-system";
import styled from "styled-components";

import Colors from "../assets/colors";
import { Title2, SmallText, Text } from "../assets/primitives";
import PrimaryButton from "../view/button";
import { media } from "../assets/styleconfig";
import Strings from "../assets/strings";

var ReactGA = require("react-ga");

export default class ContactBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }

  _setActive = index => {
    this.setState({
      active: index
    });
  };

  render() {
    return (
      <React.Fragment>
        <BoxStyle>
          <Title2 center>{Strings.landingPage.contact.headline}</Title2>
          <Text center>{Strings.landingPage.contact.subheadline}</Text>
          <Row>
            {/*<Col xs={12} sm={6}>*/}
            {/*<ClickTitle*/}
            {/*active={this.state.active === 0 ? true : false}*/}
            {/*onClick={() => {*/}
            {/*this._setActive(0);*/}
            {/*}}*/}
            {/*>*/}
            {/*Newsletter abonnieren*/}
            {/*</ClickTitle>*/}
            {/*</Col>*/}
            <Col xs={12} sm={12}>
              <ClickTitle
                // active={this.state.active === 1 ? true : false}
                onClick={() => {
                  this._setActive(1);
                }}
              >
                {Strings.landingPage.contact.contactUs}
              </ClickTitle>
            </Col>
          </Row>
          <SubArea>
            {/*{this.state.active === 0 ? (*/}
            {/*<React.Fragment>*/}
            {/*<StyledInput placeholder="E-Mail-Adresse" />*/}
            {/*<Row>*/}
            {/*<Col xs={1}>*/}
            {/*<input type="checkbox" id="newsletterCheck" />*/}
            {/*</Col>*/}
            {/*<Col xs={10}>*/}
            {/*<SmallText as="label" htmlFor="newsletterCheck">*/}
            {/*Hiermit akzeptiere ich die Erklärung zum Datenschutz und*/}
            {/*wünsche, dass BRIVE mit regelmäßig Newsletter per E-Mail*/}
            {/*zusendet.*/}
            {/*</SmallText>*/}
            {/*</Col>*/}
            {/*</Row>*/}
            {/*<br />*/}
            {/*<PrimaryButton text="Abonnieren" />*/}
            {/*</React.Fragment>*/}
            {/*) : (*/}
            <Form action="https://formspree.io/info@brive.io" method="POST">
              <StyledInput
                placeholder={Strings.landingPage.contact.mail}
                name="mail"
                type="email"
              />
              <StyledTextArea
                name="text"
                placeholder={Strings.landingPage.contact.message}
              />
              <Row>
                {/* <Col xs={1}> */}
                {/* <input type="checkbox" id="newsletterCheck" name="message" /> */}
                {/* </Col> */}
                <Col xs={12}>
                  <SmallText
                    dangerouslySetInnerHTML={{
                      __html: Strings.landingPage.contact.privacePolicyText
                    }}
                  />
                </Col>
              </Row>
              <br />
              <PrimaryButton
                type="submit"
                onClick={() => {
                  ReactGA.event({
                    category: "Conversion",
                    action: "Use Contact Form"
                  });
                }}
                text={Strings.landingPage.contact.send}
              />
            </Form>
            {/*)}*/}
          </SubArea>
        </BoxStyle>
        <BoxShadow />
      </React.Fragment>
    );
  }
}

const BoxStyle = styled.div`
  background-color: ${Colors.boxBackgroundColor};
  border-radius: 8px;
  padding: 1rem;
  position: relative;
  transition: all 0.2s;
  z-index: 1000;
  padding: 2rem;
`;

const BoxShadow = styled.div`
  background: rgba(0, 0, 0, 0.15);
  position: absolute;
  width: 90%;
  bottom: -0rem;
  border-radius: 8px;
  filter: blur(11px);
  left: 5%;
  transition: all 0.2s;
  transform: translateY(1rem);
  height: 2rem;
`;

const Form = styled.form`
  
  ${media.xl`padding: 4rem;`}
  ${media.lg`padding: 4rem;`}
  ${media.md`padding: 3rem 2rem;`}
  ${media.sm`padding: 3rem 2rem;`}

  padding: 3rem 2rem;

`;

//  TODO Remove inline Color
const SubArea = styled.div`
  margin: 0 -2rem -2rem -2rem;
  /* padding: 2rem 4rem 3rem 4rem; */
  background-color: #ecfbfa;
  border-radius: 0 0 8px 8px;
  //height: 19rem;
`;

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 1rem 0.5rem;
  height: 1.25rem;
  font-size: 0.8rem;
  font-weight: 500;
  width: 100%;
  margin: 0 0 1rem 0;
  font-family: "IBM Plex Sans", sans-serif !important;
`;

const StyledTextArea = styled.textarea`
  background: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  padding: 1rem 0.5rem;
  height: 4rem;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: "IBM Plex Sans", sans-serif !important;
  width: 100%;
  margin: 0 0 1rem 0;
  resize: vertical;
  min-height: 36px;
`;

export const ClickTitle = styled.p`
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
  font-weight: 800;
  text-align: center;
  cursor: pointer;
  transition: all 0.1s;
  color: ${props => (props.active ? "#00B8A3" : "#4A4A4A")};
`;
