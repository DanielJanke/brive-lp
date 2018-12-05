import React, { Component } from "react";
import styled from "styled-components";
import Colors from "../assets/colors";
import { Row, Col } from "react-grid-system";
import { Title2, SmallText } from "../assets/primitives";
import PrimaryButton from "../view/button";

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
          <Title2 center>{this.props.headline}</Title2>
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
                Kontaktieren
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
              <React.Fragment>
                <StyledInput placeholder="E-Mail-Adresse" />
                <StyledTextArea placeholder="Ihre Nachricht" />
                <Row>
                  <Col xs={1}>
                    <input type="checkbox" id="newsletterCheck" />
                  </Col>
                  <Col xs={10}>
                    <SmallText as="label" htmlFor="newsletterCheck">
                      Hiermit akzeptiere ich die Erklärung zum Datenschutz.
                    </SmallText>
                  </Col>
                </Row>
                <br />
                <PrimaryButton text="Nachricht senden" />
              </React.Fragment>
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

//  TODO Remove inline Color
const SubArea = styled.div`
  margin: 0 -2rem -2rem -2rem;
  padding: 2rem 4rem 3rem 4rem;
  background-color: #ecfbfa;
  border-radius: 0 0 8px 8px;
  //height: 19rem;
`;

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  padding: 0.5rem;
  height: 1.25rem;
  font-size: 0.8rem;
  font-weight: 500;
  width: 100%;
  margin: 0 0 1rem 0;
`;

const StyledTextArea = styled.textarea`
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  padding: 0.5rem;
  height: 4rem;
  font-size: 0.8rem;
  font-weight: 500;
  width: 100%;
  margin: 0 0 2rem 0;
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
