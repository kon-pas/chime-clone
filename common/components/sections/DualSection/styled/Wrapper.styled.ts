import styled from "styled-components";

import type { HexColor } from "@types";

import { getMedia, getResizeTransition } from "@utils";

interface WrapperProps {
  backgroundColor?: HexColor;
}

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  margin: 0 auto;
  background-color: ${props => props.backgroundColor};
  padding: 3rem 0;

  ${getResizeTransition("padding")}

  ${getMedia("md")} {
    padding: 7rem 0;
  }
`;

export default Wrapper;
