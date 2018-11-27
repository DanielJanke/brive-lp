import React from "react";
import styled from "styled-components";

export default function PrimaryButton({ onClick, text }) {
  return (
    <Wrapper onClick={onClick}>
      <Button>{text}</Button>
      <ButtonShadow />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const Button = styled.div`
  text-transform: uppercase;
  background-image: linear-gradient(
    135deg,
    rgba(144, 168, 0, 0.8) 0%,
    rgba(0, 184, 163, 0.8) 100%
  );
  color: white;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: 600;
  position: relative;

  z-index: 1;
  transition: all 0.2s;
  ${Wrapper}:hover & {
    background-image: linear-gradient(
      135deg,
      rgba(144, 168, 0, 1) 0%,
      rgba(0, 184, 163, 1) 100%
    );
  }
`;

const ButtonShadow = styled.div`
  background-image: linear-gradient(135deg, #90a900 0%, #00b8a3 100%);
  position: absolute;
  height: 20px;
  width: 90%;
  bottom: -0rem;
  border-radius: 8px;
  filter: blur(11px);
  left: 5%;
  transition: all 0.2s;
  z-index: 0;
  transform: translateY(0rem);
  ${Wrapper}:hover & {
    transform: translateY(0.2rem);
  }
`;
