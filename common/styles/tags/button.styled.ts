import { css } from "styled-components";
import { COLORS } from "@constants";

const button = css`
  border: 1px solid ${COLORS.BLACK};
  border-radius: 10rem;
  text-align: center;
  white-space: nowrap;
  font-size: 1rem;
  background: none;
  padding: 0.7rem 1.3rem;
  cursor: pointer;
  transition: color 0.2s linear, background-color 0.2s linear;

  &:hover {
    background-color: ${COLORS.BLACK};
    color: ${COLORS.WHITE};
  }

  svg {
    margin-left: 3px;
    width: 10px;
  }
`;

export default button;
