import styled from "styled-components";

import type { HexColor } from "@types";

import { COLORS } from "@constants";

import { getMedia } from "@utils";

interface WrapperProps {
  backgroundColor?: HexColor;
}

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  background-color: ${props => props.backgroundColor ?? COLORS.WHITE};
  padding: 3rem 0;

  ${getMedia('md')} {
    padding: 6rem 0;
  }
`;

export default Wrapper;