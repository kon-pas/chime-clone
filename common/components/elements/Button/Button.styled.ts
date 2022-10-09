import styled from "styled-components";

import { COLORS } from "@constants";

const Button = styled.button`
  border: 1px solid ${COLORS.BLACK};
  border-radius: 10rem;
  text-align: center;
  white-space: nowrap;
  font-size: 1rem;
  background: none;
  padding: 0.7rem 1.3rem;
  transition: all 0.2s linear;

  &:hover {
    background-color: ${COLORS.BLACK};
    color: ${COLORS.WHITE};
    transition: all 0.2s linear;
  }

  svg {
    margin-left: 3px;
    width: 10px;
  }
`;

export default Button;
