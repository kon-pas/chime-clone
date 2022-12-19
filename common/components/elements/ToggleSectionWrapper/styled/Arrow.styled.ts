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
  width: 40px;
  color: ${COLORS.GRAY_MEDIUM};
  transition-property: color;
  transition-duration: 0.2s;
  padding: 25px 0;

  &:hover {
    cursor: pointer;
    color: ${COLORS.GRAY_LIGHT};
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
