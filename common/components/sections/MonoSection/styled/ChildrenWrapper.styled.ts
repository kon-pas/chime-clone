import styled from "styled-components";

import { getMedia, getResizeTransition } from "@utils";

import { h2, p, ul } from "@styles/Tags.styled";

interface ChildrenWrapperProps {
  textAlign: "start" | "center" | "end";
  width: number;
}

const ChildrenWrapper = styled.div<ChildrenWrapperProps>`
  display: grid;
  gap: 2rem;

  > p {
    ${p}
    width: 100%;
  }

  > h2 {
    ${h2}
  }

  > ul {
    ${ul}
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
