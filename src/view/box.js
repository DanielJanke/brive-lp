import React from "react";
import styled from "styled-components";
import Colors from "../assets/colors";
import { Text, BoxTitle, BoxGreyNumber } from "../assets/primitives";

export default function Box({ number, iconPath, headline, text }) {
  return (
    <Wrapper>
      <BoxStyle>
        {number ? <BoxGreyNumber>{number}</BoxGreyNumber> : null}
        {iconPath ? <Icon src={iconPath} /> : null}
        <BoxTitle>{headline}</BoxTitle>
        <Text style={{ textAlign: "center", fontSize: 16 }}>{text}</Text>
      </BoxStyle>
      <BoxShadow />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const BoxStyle = styled.div`
  background-color: ${Colors.boxBackgroundColor};
  border-radius: 8px;
  padding: 0.5rem;
  position: relative;
  //height: 264px;
  transition: all 0.2s;
  z-index: 1000;
`;

const BoxShadow = styled.div`
  background: rgba(0, 0, 0, 0.15);
  position: absolute;
  width: 80%;
  height: 80%;
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

const Icon = styled.img`
  width: 3rem;
  display: block;
  margin: 2rem auto 2rem auto;
`;
