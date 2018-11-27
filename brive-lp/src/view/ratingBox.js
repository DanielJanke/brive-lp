import React from "react";
import styled from "styled-components";
import Colors from "../assets/colors";
import { Text, BoxTitle, BoxGreyNumber } from "../assets/primitives";
import PieChart from "react-minimal-pie-chart";

export default function RatingBox({ headline, score }) {
  return (
    <Wrapper>
      <BoxStyle>
        <BoxTitle>{headline}</BoxTitle>
        <PieChart
          startAngle={-90}
          lineWidth={13}
          totalValue={100}
          rounded
          lengthAngle={-360}
          data={[
            { title: "One", value: 100 - score, color: "#FF5E00" },
            { title: "One", value: score, color: "#39FF9A" }
          ]}
        />
      </BoxStyle>
      <BoxShadow />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const BoxStyle = styled.div`
  background-color: ${Colors.boxBackgroundColor};
  border-radius: 8px;
  padding: 0.5rem;
  position: relative;
  //height: 235px;
  //width: 235px;
  transition: all 0.2s;
  z-index: 1000;
  margin: 0.5rem 0;
`;

const BoxShadow = styled.div`
  background: rgba(0, 0, 0, 0.15);
  position: absolute;
  width: 80%;
  height: 235px;
  bottom: -0rem;
  border-radius: 8px;
  filter: blur(11px);
  left: 10%;
  transition: all 0.2s;
  transform: translateY(0rem);
  ${Wrapper}:hover & {
    transform: translateY(0.5rem) scale(1.1);
  }
`;
