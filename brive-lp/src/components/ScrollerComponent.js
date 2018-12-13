import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import posed from "react-pose";

export default class ScrollerComponent extends Component {
  render() {
    return (
      <Wrapper>
        <AnimatedWrapper duration={this.props.duration}>
          {this.props.children}
          {this.props.children}
          {this.props.children}
          {this.props.children}
        </AnimatedWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  z-index: 10;
  overflow-x: hidden;
  max-width: 100vw;
`;

const Scrolling = keyframes`
   0%   {transform: translateX(0)}
   99.999999999%  {transform: translateX(-25%)}
  100%  {transform: translateX(0)}
`;

const AnimatedWrapper = styled.div`
  display: flex;
  animation: ${Scrolling} ${props => (props.duration ? props.duration : 15)}s
    linear infinite;
`;
