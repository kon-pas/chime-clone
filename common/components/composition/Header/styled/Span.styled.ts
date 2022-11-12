import styled from "styled-components";

import { COLORS } from "@constants";

import { getMedia } from "@utils";

import { getResizeTransition } from "@utils";

const Span = styled.span`
  display: inline-block;
  white-space: nowrap;
  font-size: 0.95rem;
  font-weight: 700;
  position: relative;
  user-select: none;
  align-self: center;
  display: none;
  cursor: pointer;

  ${getResizeTransition("font-size")}

  &:hover {
    transition-property: color;
    transition-duration: 0.2s;
    color: ${COLORS.LIME_DARK};
  }

  ${getMedia("md")} {
    display: inline-block;
    font-size: 1rem;
  }
`;

export default Span;
