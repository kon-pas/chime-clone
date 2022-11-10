import styled from "styled-components";

import { COLORS } from "@constants";

const Input = styled.input`
  outline: none;
  font-size: 0.9rem;
  padding: 0.75rem;
  border: 1px solid ${COLORS.GRAY_MEDIUM};
  border-radius: 0.25rem;

  &:focus {
    outline: 2px solid ${COLORS.LIME_MEDIUM};
  }
`;

export default Input;