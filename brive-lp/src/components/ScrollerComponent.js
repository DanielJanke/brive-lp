import React, { Component } from "react";
import styled from "styled-components";
import posed from "react-pose";

export default class ScrollerComponent extends Component {
  state = {
    toggle: true
  }

  _toggleState = () => {
    this.setState({toggle: !this.state.toggle})
  }

  render() {
    return (
      <React.Fragment>
      <Wrapper>
        <AnimatedWrapperStyle pose={this.state.toggle? 'loop' : 'noloop'}>
          <Filler />
          <Filler />
          <Filler />
          <Filler />
          <Filler />
        </AnimatedWrapperStyle>

      </Wrapper>
        <button style={{marginTop: 160}} onClick={this._toggleState}>Toggle</button>

      </React.Fragment>
    );
  }
}

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  z-index: 10;
`;

const Filler = styled.div`
  width: 300px;
  height: 100px;
  margin-left: 10px;
  background-color: red;
`;

const AnimatedWrapper = posed.div({
  loop: { x: '0%' },
  noloop: { x: '100%'}
});

const AnimatedWrapperStyle = styled(AnimatedWrapper)`
  display: flex;
`;
