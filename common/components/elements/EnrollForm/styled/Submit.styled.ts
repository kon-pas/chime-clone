import styled from "styled-components";

import { getMedia } from "@utils";
import { COLORS } from "@constants";
import { button } from "@styles/Mixins.styled";

interface SubmitProps {
  theme: "light" | "dark";
}

const Submit = styled.button<SubmitProps>`
  ${button}

  font-weight: 600;
  border: none;

  background-color: ${props =>
    props.theme === "light" ? COLORS.LIME_MEDIUM : COLORS.FONT_GRAY_DARK};
  color: ${props => (props.theme === "light" ? COLORS.BLACK : COLORS.WHITE)};

  &:hover {
    background-color: ${props =>
      props.theme === "light" ? COLORS.LIME_DARK : COLORS.FONT_GRAY_MEDIUM};
  }

  width: 100%;

  ${getMedia("md")} {
    width: auto;
  }
`;

export default Submit;
