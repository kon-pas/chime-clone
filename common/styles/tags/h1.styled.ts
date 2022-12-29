import { css } from "styled-components";
import { getMedia, getResizeTransition } from "@utils";

const h1 = css`
  font-size: 2.3rem;

  ${getResizeTransition("font-size")}

  ${getMedia("md")} {
    font-size: 2.7rem;
  }

  ${getMedia("lg")} {
    font-size: 3.3rem;
  }
`;

export default h1;
