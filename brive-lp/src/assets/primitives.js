import styled from "styled-components";
import Colors from "./colors";

export const Title1 = styled.h1`
  font-size: 26px;
  font-weight: 600;
  color: ${props =>
    props.light ? Colors.textColorLight : Colors.textColorDark};
`;

export const Title2 = styled.h2`
  font-size: 26px;
  font-weight: 500;
  color: ${props =>
    props.light ? Colors.textColorLight : Colors.textColorDark};
  text-align: ${props => (props.center ? "center" : "")};
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  color: ${props =>
    props.light ? Colors.textColorLight : Colors.textColorDark};
`;

export const BigNumber = styled.p`
  opacity: 0.19;
  font-size: 66px;
  color: #000000;
  margin: 0;
`;

export const Question = styled(Text)`
  margin: 0.5rem auto;
  font-weight: 500;
  transition: all 0.1s;
  cursor: pointer;
  &:hover {
    color: #707070;
  }
`;

export const SmallText = styled.p`
  font-size: 12px;
  color: #373434;
  font-weight: 400;
`;

export const BoxGreyNumber = styled.p`
  line-height: 0;
  opacity: 0.4;
  font-size: 42px;
  color: #949494;
  text-align: center;
`;

export const BoxTitle = styled.p`
  text-transform: uppercase;
  font-size: 16px;
  color: #00b990;
  text-align: center;
  font-weight: 800;
`;
