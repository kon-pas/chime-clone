import styled from "styled-components";

import type { HexColor } from "@types";

import { COLORS } from "@constants";

interface WrapperProps {
  backgroundColor?: HexColor;
  src?: `/static/${string}`;
  coverBreakpoint?: number;
  minHeight?: number;
}

const Wrapper = styled.div<WrapperProps>`
  background-color: ${props => props.backgroundColor ?? COLORS.WHITE};
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  background-size: cover;
  overflow: hidden;
  ${props =>
    props.minHeight &&
    `
    min-height: ${props.minHeight}px;
  `}
  background: url(${props => props.src ?? ""}) no-repeat
    ${props => (props.coverBreakpoint ? `${props.coverBreakpoint}%` : "center")}
    center;
`;

export default Wrapper;
