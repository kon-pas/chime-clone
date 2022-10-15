import styled from "styled-components";

import { COLORS, MEDIA } from "@constants";

import { resizeTransition } from "@utils";

import GreenButton from "@components/elements/GreenButton";

const Button = styled(GreenButton)`
  padding: 0.5rem 1.05rem;
  margin-left: 0.5rem;

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
