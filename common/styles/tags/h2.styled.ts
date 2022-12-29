import { css } from "styled-components";
import { getMedia, getResizeTransition } from "@utils";

const h2 = css`
  font-size: 2.1rem;
  line-height: 2.65rem;
  letter-spacing: 0.005em;

  ${getResizeTransition("font-size")}

  ${getMedia("lg")} {
    font-size: 2.25rem;
  }
`;

export default h2;
