import styled from "styled-components";

import { getMedia, getResizeTransition } from "@utils";

import { h2, p } from "@styles/Tags.styled";

interface ChildrenWrapperProps {
  textAlign: "start" | "center" | "end";
  width: number;
}

const ChildrenWrapper = styled.div<ChildrenWrapperProps>`
  display: grid;
  gap: 2rem;

  p {
    ${p}
  }

  h2 {
    ${h2}
  }

  ${getResizeTransition("width", "margin")}

  ${getMedia("md")} {
    width: ${props => `${props.width}px`};
    margin: 0 auto;
    justify-items: center;
    text-align: ${props => props.textAlign};
  }
`;

export default ChildrenWrapper;
