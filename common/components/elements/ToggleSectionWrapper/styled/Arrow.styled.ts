import styled from "styled-components";

import { getMedia } from "@utils";
import { Breakpoints } from "@enums";

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
