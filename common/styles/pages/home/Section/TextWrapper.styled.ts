import styled from "styled-components";

import { MEDIA } from "@constants";

const TextWrapper = styled.div`

  h2 {
    font-size: 1.15rem;
  }

  p {
    margin-top: 1rem;
    margin-bottom: 1.75rem;
    line-height: 1.75rem;
    font-size: 0.95rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }


  ${MEDIA.MD} {
    width: 50%;
    display: inline-block;
    vertical-align:top;
  }
`;

export default TextWrapper;