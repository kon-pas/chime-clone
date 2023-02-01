import styled from "styled-components";
import { h3 } from "@styles/tags";
import { getMedia, getResizeTransition } from "@utils";

const TextWrapper = styled.div`
  h3 {
    ${h3}
  }

  p {
    margin-top: 1rem;
    margin-bottom: 1.75rem;
    line-height: 1.75rem;
    font-size: 0.95rem;

    ${getResizeTransition("font-size")}

    &:last-of-type {
      margin-bottom: 0;
    }

    ${getMedia("lg")} {
      font-size: 1rem;
    }
  }

  ${getMedia("md")} {
    display: inline-block;
    vertical-align: top;
  }
`;

export default TextWrapper;
