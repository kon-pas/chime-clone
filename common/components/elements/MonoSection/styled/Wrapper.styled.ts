import styled from "styled-components";

import type { HexColor } from "@types";

import { COLORS, MEDIA } from "@constants";

interface WrapperProps {
  backgroundColor?: HexColor;
}

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  background-color: ${props => props.backgroundColor ?? COLORS.WHITE};
  padding: 3rem 0;

  // ${MEDIA.MD} {
  //   padding: 6rem 0;
  // }
`;

export default Wrapper;