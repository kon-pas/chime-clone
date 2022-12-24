import { css } from "styled-components";

import { getMedia, getResizeTransition } from "@utils";

export const h1 = css`
  font-size: 2.3rem;

  ${getResizeTransition("font-size")}

  ${getMedia("md")} {
    font-size: 2.7rem;
  }

  ${getMedia("lg")} {
    font-size: 3.3rem;
  }
`;

export const h2 = css`
  font-size: 2.1rem;
  line-height: 2.65rem;
  letter-spacing: 0.005em;

  ${getResizeTransition("font-size")}

  ${getMedia("lg")} {
    font-size: 2.25rem;
  }
`;

export const h3 = css`
  font-size: 1.15rem;

  ${getResizeTransition("font-size")}

  ${getMedia("lg")} {
    font-size: 1.5rem;
  }
`;

export const p = css`
  line-height: 1.75rem;
`;

export const ul = css`
  margin-left: 1.45rem;

  > li {
    list-style-type: disc;
    list-style-position: outside;
    margin: 0.5rem 0;
    line-height: 1.75rem;
  }
`;

export const li = css<{
  bulletSrc?: `/static/${string}`;
  bulletPosition?: "inside" | "outside";
}>`
  &::before {
    vertical-align: sub;
    content: "";
    display: inline-block;
    background-image: url(${props => props.bulletSrc ?? "/static/shared/check.png"});
    background-repeat: no-repeat;
    background-size: 20px 20px;
    width: 20px;
    height: 20px;
    margin: auto 10px auto
      ${props => (props.bulletPosition === "inside" ? `0` : `-30px`)};
  }
`;
