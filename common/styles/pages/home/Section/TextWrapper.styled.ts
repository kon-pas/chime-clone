import styled from "styled-components";

import { MEDIA } from "@constants";

import { resizeTransition } from "@utils";

const TextWrapper = styled.div`

  h2 {
    font-size: 1.15rem;

    ${MEDIA.LG} {
      font-size: 1.5rem;
    }
  }

  p {
    margin-top: 1rem;
    margin-bottom: 1.75rem;
    line-height: 1.75rem;
    font-size: 0.95rem;

    ${resizeTransition("font-size")}

    &:last-of-type {
      margin-bottom: 0;
    }

    ${MEDIA.LG} {
      font-size: 1rem;
    }
  }

  ${MEDIA.MD} {
    display: inline-block;
    vertical-align:top;
  }
`;

export default TextWrapper;