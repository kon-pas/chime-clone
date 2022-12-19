import styled from "styled-components";

import { getMedia } from "@utils";
import { Breakpoints } from "@enums";
import { COLORS } from "@constants";

interface ArrowProps {
  side: "left" | "right";
}

const Arrow = styled.div<ArrowProps>`
  position: absolute;
  display: none;
  ${props => (props.side === "left" ? `left: 10px;` : `right: 10px;`)}
  top: 50%;
  transform: translateY(-50%);
  width: 35px;
  color: ${COLORS.GRAY_MEDIUM};

  opacity: 0.8;
  transition-property: opacity;
  transition-duration: 0.1s;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  @media (min-width: ${Breakpoints.md + 50}px) {
    display: block;
  }

  @media (min-width: ${Breakpoints.lg}px) {
    display: none;
  }

  @media (min-width: ${Breakpoints.lg + 50}px) {
    display: block;
  }
`;

export default Arrow;
