import styled from "styled-components";

import { COLORS, MEDIA } from "@constants";

import { resizeTransition } from "@utils";

import DefaultButton from "@components/elements/Button/Button.styled";

const Button = styled(DefaultButton)`
  background-color: ${COLORS.LIME_MEDIUM};
  border: none;
  font-weight: 600;
  padding-top: 1rem;
  padding-bottom: 1rem;

  // ${resizeTransition('padding-top', 'padding-bottom')}

  ${MEDIA.MD} {
    width: fit-content;
    padding: 1rem 2rem;
  }
`;

export default Button;