import styled from "styled-components";

import type { HexColor } from "@types";

import { COLORS } from "@constants";

interface WrapperProps {
  backgroundColor?: HexColor;
}

const Wrapper = styled.div<WrapperProps>`
  background-color: ${props => props.backgroundColor ?? COLORS.WHITE};
  width: 100%;
  padding: 2rem 0;
`;

export default Wrapper;