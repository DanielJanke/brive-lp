import React from "react";
import { SectionBlue, SectionLight } from "../assets/styles";
import { Col, Container, Row } from "react-grid-system";
import { Text, Title1, Title2 } from "../assets/primitives";
import Strings from "../assets/strings";
import PieChart from "react-minimal-pie-chart";

import styled from "styled-components";

const ProblemSection = () => {
  return (
    <SectionBlue>
      <Container>
        <Row>
          <Col xs={12} sm={5}>
            <Title2>{Strings.landingPage.intro.headline}</Title2>
            <Text>{Strings.landingPage.intro.text}</Text>
          </Col>
          <Col xs={12} sm={3}>
            <PieChart
              lineWidth={10}
              rounded
              startAngle={0}
              data={[
                { title: "One", value: 53, color: "#D9D9D9" },
                { title: "Two", value: 47, color: "#50E3C2" }
              ]}
            />
          </Col>
        </Row>
      </Container>
    </SectionBlue>
  );
};

export default ProblemSection;
