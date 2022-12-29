import { css } from "styled-components";

const li = css<{
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

export default li;
