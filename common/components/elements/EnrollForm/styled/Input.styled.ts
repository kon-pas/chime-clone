import styled from "styled-components";

import { COLORS } from "@constants";

const Input = styled.input`
  border: 1px solid ${COLORS.FONT_GRAY_LIGHT};
  border-radius: 10rem;
  white-space: nowrap;
  font-size: 1rem;
  background: none;
  padding: 0.7rem 1.3rem;
  cursor: pointer;
  background-color: ${COLORS.WHITE};
  color: ${COLORS.BLACK};
  flex-grow: 1;
`;

export default Input;
