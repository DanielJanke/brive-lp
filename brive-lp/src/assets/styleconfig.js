import { css } from "styled-components";

export const breakpoints = {
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576
};

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export const containerWidthsConfid = {
  // containerwidths: [540, 750, 960, 1140]
  containerWidths: [540, 750, 960, 1024]
};
