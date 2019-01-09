import React from "react";
import styled from "styled-components";
import Colors from "../assets/colors";
import { Text, BoxTitle, ScoringPoints } from "../assets/primitives";
import PieChart from "react-minimal-pie-chart";

export default function RatingBox({ headline, score }) {
  return (
    <Wrapper>
      <BoxWrapper>
        <BoxStyle>
          <BoxTitle>{headline}</BoxTitle>
          <ChartWrapper>
            <PieChart
              startAngle={-90}
              lineWidth={18}
              totalValue={100}
              rounded
              lengthAngle={-360}
              data={[
                { title: "One", value: 100 - score, color: "#FF5E00" },
                { title: "One", value: score, color: "#39FF9A" }
              ]}
            />
            <TextContainer>
              <ScoringPoints>{score}</ScoringPoints>
              <Divider />
              <ScoringPoints>100</ScoringPoints>
            </TextContainer>
          </ChartWrapper>
        </BoxStyle>
        <BoxShadow />
      </BoxWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 1rem;
  height: 19rem;
  position: relative;
`;

const BoxWrapper = styled.div`
  position: relative;
`;

const ChartWrapper = styled.div`
  padding: 3rem 3rem 3rem 3rem;
  margin: -2rem 0 0 0;
  position: relative;
`;

const BoxStyle = styled.div`
  background-color: ${Colors.boxBackgroundColor};
  border-radius: 20px;
  padding: 0.5rem;
  position: relative;
  height: 235px;
  width: 235px;
  transition: all 0.2s;
  z-index: 1000;
  margin: 0.5rem 0;
`;

const BoxShadow = styled.div`
  background: rgba(0, 0, 0, 0.15);
  position: absolute;
  width: 235px;
  height: 235px;
  bottom: -1rem;
  border-radius: 20px;
  filter: blur(11px);
  left: 3%;
  transition: all 0.2s;
  transform: translateY(0rem);
`;

const TextContainer = styled.div`
  position: absolute;
  top: 4.8rem;
  left: 0;
  right: 0;
`;

const Divider = styled.div`
  background: #d8d8d8;
  width: 2rem;
  height: 2px;
  border-radius: 20px;
  margin: 0 auto;
`;
