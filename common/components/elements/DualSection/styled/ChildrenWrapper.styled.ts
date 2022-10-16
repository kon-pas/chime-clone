import styled from "styled-components";

import { COLORS, MEDIA } from "@constants";

import { resizeTransition } from "@utils";

const ChildrenWrapper = styled.div`
  height: fit-content;

  ${resizeTransition("all")}

> h1 {
    font-size: 2.1rem;
    line-height: 2.65rem;
    letter-spacing: 0.005em;
    color: ${COLORS.FONT_GRAY_DARK};
  }

  > p {
    line-height: 1.75rem;
    margin-top: 0.75rem;
    margin-bottom: 1.25rem;
    
    > small {}
  }

  ${MEDIA.MD} {
    width: 365px;
    margin: auto 0;
  }

  ${MEDIA.LG} {
    width: 400px;
  }
`;

export default ChildrenWrapper;
