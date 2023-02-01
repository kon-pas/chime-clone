import styled from "styled-components";
import { h2, p, ul } from "@styles/tags";
import { getMedia, getResizeTransition } from "@utils";
import { COLORS } from "@constants";

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
    color: ${COLORS.FONT_GRAY_DARK};
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
