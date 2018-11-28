import React from "react";
import { SectionBlue, SectionLight } from "../assets/styles";
import { Col, Container, Row } from "react-grid-system";
import { Text, Title1, Title2, ChartNumber, ChartDescription} from "../assets/primitives";
import Strings from "../assets/strings";
import PieChart from "react-minimal-pie-chart";

import styled from "styled-components";

const ProblemSection = () => {
  return (
    <SectionBlueMargin>
      <Container>
        <Row align='center'>
          <Col xs={12} sm={5}>
            <Title2>{Strings.landingPage.intro.headline}</Title2>
            <Text>{Strings.landingPage.intro.text}</Text>
          </Col>
          <Col xs={10} sm={3} offset={{sm: 1}} >

            <ChartContainer>
            <AmountContainer><ChartNumber>47%</ChartNumber></AmountContainer>
            <PieChart
              lineWidth={10}
              rounded
              startAngle={0}
              data={[
                { title: "One", value: 53, color: "#D9D9D9" },
                { title: "Two", value: 47, color: "#50E3C2" }
              ]}
            />
            </ChartContainer>

          </Col>
          <Col xs={12} sm={3}>
            <ChartDescription>
              Anteil des Fahrers an den Flottenkosten
            </ChartDescription>
          </Col>
        </Row>
      </Container>    </SectionBlueMargin>
  );
};

export default ProblemSection;

const SectionBlueMargin = styled(SectionBlue)`
  padding: 4rem 0;
`


const ChartContainer = styled.div`
 position: relative;
`

const AmountContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
