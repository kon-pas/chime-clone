import styled from "styled-components";

import { COLORS } from "@constants";

import { Button } from "@components/elements";

const GreenButton = styled(Button)`
  background-color: ${COLORS.LIME_MEDIUM};
  border: none;
  font-weight: 600;

  &:hover {
    color: ${COLORS.BLACK};
    background-color: ${COLORS.LIME_DARK};
  }
`;

export default GreenButton;
