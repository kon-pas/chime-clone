import styled from "styled-components";

import { COLORS } from "@constants";

const Input = styled.input`
  outline: none;
  font-size: 0.9rem;
  padding: 0.75rem;
  border: 1px solid ${COLORS.GRAY_MEDIUM};
  border-radius: 0.25rem;

  &:focus {
    border: 1px solid ${COLORS.BLACK};
  }
`;

export default Input;