import React, { Component } from "react";
import { SectionBlue, SectionLight } from "../assets/styles";
import { Container, Row, Col } from "react-grid-system";
import { Title1, Title2, Text } from "../assets/primitives";
import Strings from "../assets/strings";
import openQuestion from "../assets/img/open_question.svg";
import styled from "styled-components";

export default class FaqSection extends Component {
  state = {
    openFaq: Strings.landingPage.faq.questions.map(() => false)
  };

  _openFaq = i => {
    this.setState({
      openFaq: this.state.openFaq.map((q, k) => i === k)
    });
  };

  render() {
    return (
      <SectionBlue>
        <Container>
          <Row justify="center">
            <Col xs={12}>
              <Title2 center>{Strings.landingPage.faq.headline}</Title2>
            </Col>
            {Strings.landingPage.faq.questions.map((question, i) => (
              <ColWithCursor
                onClick={() => {
                  this._openFaq(i);
                }}
                key={i}
                xs={12}
                sm={8}
              >
                <Row align="center">
                  <Col xs={10} sm={11}>
                    <Question>{question.question}</Question>
                  </Col>
                  <Col xs={2} sm={1}>
                    <img src={openQuestion} />
                  </Col>
                  <Col xs={12}>
                    {this.state.openFaq[i] && <Text>{question.answer}</Text>}
                    <Hr />
                  </Col>
                </Row>
              </ColWithCursor>
            ))}
          </Row>
        </Container>
      </SectionBlue>
    );
  }
}

const ColWithCursor = styled(Col)`
  cursor: pointer;
`;

const Hr = styled.hr`
  border: 0;
  height: 2px;
  background-color: #d4dedc;
  margin-bottom: 1rem;
`;

const Question = styled(Text)`
  margin: 0.5rem auto;
  font-weight: 500;
  transition: all 0.1s;
  cursor: pointer;
  ${ColWithCursor}:hover & {
    color: #707070;
  }
`;
