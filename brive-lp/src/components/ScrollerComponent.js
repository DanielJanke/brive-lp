import React, { Component } from "react";
import styled from "styled-components";
import posed from "react-pose";

export default class ScrollerComponent extends Component {
  render() {
    return (
      <Wrapper>
        <AnimatedWrapperStyle pose="loop">
          <Filler />
          <Filler />
          <Filler />
          <Filler />
          <Filler />
        </AnimatedWrapperStyle>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: absolute;
  display: flex;
`;

const Filler = styled.div`
  width: 300px;
  height: 100px;
  margin-left: 10px;
  background-color: red;
`;

const AnimatedWrapper = posed.div({
  loop: { transform: `translateX: -10%` },
  noloop: { transform: `translateX: 0` }
});

const AnimatedWrapperStyle = styled(AnimatedWrapper)`
  display: flex;
`;
