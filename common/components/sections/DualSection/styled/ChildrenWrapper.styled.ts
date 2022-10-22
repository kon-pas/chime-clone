import styled from "styled-components";

import { COLORS } from "@constants";

import { getMedia } from "@utils";

import { getResizeTransition } from "@utils";

interface ChildrenWrapper {
  isCentered?: boolean;
}

const ChildrenWrapper = styled.div<ChildrenWrapper>`
  height: fit-content;

  ${getResizeTransition("width", "margin")}

  > h1 {
    
  }

  > h2 {
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

  ${getMedia('md')} {
    width: 365px;
    margin: auto 0;
  }

  ${getMedia('lg')} {
    width: 400px;
    margin: ${props => props.isCentered ? 'auto auto' : 'auto 0'};
  }
`;

export default ChildrenWrapper;
