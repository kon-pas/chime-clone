import { css } from "styled-components";
import { BREAKPOINTS } from "@constants";
import { getMedia, getResizeTransition } from "@utils";

const container = css`
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

export default container;
