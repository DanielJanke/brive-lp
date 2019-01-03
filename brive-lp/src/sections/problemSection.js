import React from "react";
import { SectionBlue, SectionLight } from "../assets/styles";
import { Col, Container, Row } from "react-grid-system";
import {
  Text,
  Title1,
  Title2,
  ChartNumber,
  ChartDescription,
  SmallText
} from "../assets/primitives";
import Strings from "../assets/strings";
import PieChart from "react-minimal-pie-chart";

import styled from "styled-components";
import { media } from "../assets/styleconfig";

const ProblemSection = () => {
  return (
    <SectionBlueMargin>
      <Container>
        <Row align="center">
          <Col xs={12} sm={5}>
            <Title2>{Strings.landingPage.intro.headline}</Title2>
            <Text>{Strings.landingPage.intro.text}</Text>
          </Col>
          <Col xs={10} sm={3} offset={{ xs: 1, sm: 1 }}>
            <ChartContainer>
              <AmountContainer>
                <ChartNumber>
                  <SmallText style={styles.upto}>bis zu</SmallText>
                  63%
                </ChartNumber>
              </AmountContainer>
              <PieChart
                lineWidth={10}
                rounded
                lengthAngle={-360}
                startAngle={-90}
                data={[
                  { title: "One", value: 37, color: "#D9D9D9" },
                  { title: "Two", value: 63, color: "#50E3C2" }
                ]}
              />
            </ChartContainer>
          </Col>
          <Col xs={12} sm={3}>
            <ChartDescription>
              <p>{Strings.landingPage.intro.chartDescription}</p>
              <ul>
                {Strings.landingPage.intro.bulletPoints.map(point => {
                  return <li>{point}</li>;
                })}
              </ul>
            </ChartDescription>
          </Col>
        </Row>
      </Container>{" "}
    </SectionBlueMargin>
  );
};

export default ProblemSection;

const SectionBlueMargin = styled(SectionBlue)`
  padding: 6rem 0;
  ${media.xl`padding: 6rem 0;`}
  ${media.lg`padding: 6rem 0;`}
  ${media.md`padding: 3rem 0;`}
  ${media.sm`padding: 3rem 0;`}
  
  `;

const ChartContainer = styled.div`
  position: relative;
`;

const AmountContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const styles = {
  upto: {
    position: "relative",
    textAlign: "center",
    marginTop: -16,
    marginBottom: 0
  }
};
