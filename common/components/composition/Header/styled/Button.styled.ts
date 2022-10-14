import styled from "styled-components";

import { COLORS, MEDIA } from "@constants";

import { resizeTransition } from "@utils";

import DefaultButton from "@components/elements/Button/Button.styled";

const Button = styled(DefaultButton)`
  background-color: ${COLORS.LIME_MEDIUM};
  border: none;
  padding: 0.5rem 1.05rem;
  margin-left: 0.5rem;
  // margin-right: 20px;
  font-size: 0.95rem;
  font-weight: 600;

  &:hover {
    color: ${COLORS.BLACK};
    background-color: ${COLORS.LIME_DARK};
  }

  ${MEDIA.MD} {
    padding: 0.75rem 1.4rem;

    ${resizeTransition("all")}
  }

  ${MEDIA.LG} {
    padding: 0.75rem 3.85rem;
    margin-left: 1.8rem;
  }
`;

export default Button;
