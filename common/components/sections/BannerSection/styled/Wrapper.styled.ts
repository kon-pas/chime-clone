import styled from "styled-components";

import type { HexColor } from "@types";

import { COLORS } from "@constants";

interface WrapperProps {
  backgroundColor?: HexColor;
  src?: `/static/${string}`;
  coverBreakpoint?: number;
}

const Wrapper = styled.div<WrapperProps>`
  background-color: ${props => props.backgroundColor ?? COLORS.WHITE};
  width: 100%;
  height: 100%;
  padding: 2rem 0;
  background: url("/static/pages/home/web-01-app-desktop.png") no-repeat
    ${props => (props.coverBreakpoint ? `${props.coverBreakpoint}%` : "center")}
    center;
  background-size: cover;
  overflow: hidden;
`;

export default Wrapper;
