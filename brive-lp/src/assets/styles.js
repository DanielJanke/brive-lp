import styled from "styled-components";

export const Section = styled.div`
  padding: 3rem 0;
  width: 100vw;
  //height: 100vh;
  background-image: linear-gradient(-135deg, #90a900 0%, #00b8a3 100%);
`;

export const SectionBlue = styled(Section)`
  background-image: linear-gradient(-180deg, #f5faf7 0%, #d3f1ef 100%);
`;

export const SectionLight = styled(Section)`
  background-image: linear-gradient(
    -135deg,
    rgba(144, 169, 0, 0.32) 0%,
    rgba(0, 184, 163, 0.32) 100%
  );
`;
