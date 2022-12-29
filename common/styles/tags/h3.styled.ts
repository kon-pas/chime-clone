import { css } from "styled-components";
import { getMedia, getResizeTransition } from "@utils";

const h3 = css`
  font-size: 1.15rem;

  ${getResizeTransition("font-size")}

  ${getMedia("lg")} {
    font-size: 1.5rem;
  }
`;

export default h3;
