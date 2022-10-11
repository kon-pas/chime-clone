import styled from "styled-components";

import type { HexColor } from "@types";

import { MEDIA } from "@constants";

interface WrapperProps {
  backgroundColor?: HexColor;
}

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  margin: 0 auto;
  background-color: ${props => props.backgroundColor};
  padding: 3rem 0;
  transition: padding 0.5s linear;

  ${MEDIA.MD} {
    padding: 7rem 0;
  }
`;

export default Wrapper;
