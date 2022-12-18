import { css } from "styled-components";

import { COLORS, BREAKPOINTS } from "@constants";
import { getMedia, getResizeTransition } from "@utils";

export const container = css`
  padding: 0 1.4rem;

  ${getResizeTransition("width", "padding", "margin")}

  ${getMedia("md")} {
    width: ${BREAKPOINTS.MD}px;
    margin: 0 auto;
  }

  ${getMedia("lg")} {
    width: ${BREAKPOINTS.LG}px;
    padding: 0 2rem;
  }
`;

export const button = css`
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
