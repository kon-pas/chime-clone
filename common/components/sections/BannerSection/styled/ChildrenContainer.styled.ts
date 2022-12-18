import styled from "styled-components";

import { h1, p, li } from "@styles/Tags.styled";

import { COLORS } from "@constants";

import { getMedia } from "@utils";

interface ChildrenContainer {
  stretched: boolean;
  text?: "light" | "dark";
}

const ChildrenContainer = styled.div<ChildrenContainer>`
  display: flex;
  gap: 1rem;
  color: ${props =>
    props.text === "dark" ? COLORS.FONT_GRAY_MEDIUM : COLORS.WHITE};
  text-shadow: 0 0 ${props => props.text === "light" && "3px"} rgba(0, 0, 0, 1);

  flex-direction: column;
  min-height: 100%;

  h1 {
    ${h1}
    color: ${props => (props.text === "dark" ? COLORS.BLACK : COLORS.WHITE)};

    ${props =>
      props.stretched &&
      `flex-grow: 1;
    `}

    ${getMedia("md")} {
      flex-grow: 0;
    }
  }

  p {
    ${p}
    font-weight: 200;
    color: ${props =>
      props.text === "dark" ? COLORS.FONT_GRAY_MEDIUM : COLORS.WHITE};
  }

  ul {
    display: grid;
    gap: 0.75rem;
    margin-left: 30px;

    li {
      ${li}

      font-weight: 600;
      line-height: 1.5em;
    }
  }

  small {
    color: ${props => props.text === "dark" && COLORS.FONT_GRAY_LIGHT};
    display: table-cell;
    vertical-align: bottom;
  }

  ${getMedia("md")} {
    width: 365px;
  }

  ${getMedia("lg")} {
    width: 485px;
  }
`;

export default ChildrenContainer;
