import styled from "styled-components";

import { getMedia, getResizeTransition } from "@utils";

interface ChildrenWrapperProps {
  textAlign: "start" | "center" | "end";
  width: number;
}

const ChildrenWrapper = styled.div<ChildrenWrapperProps>`
  display: grid;
  gap: 2rem;

  p {
    line-height: 1.75rem;
  }
  
  h2 {
    font-size: 2.1rem;
    line-height: 2.65rem;
    letter-spacing: 0.005em;

    ${getResizeTransition('font-size')}

    ${getMedia('lg')} {
      font-size: 2.25rem;
    }
  }

  ${getResizeTransition('width', 'margin')}
  
  ${getMedia('md')} {
    width: ${props => `${props.width}px`};
    margin: 0 auto;
    justify-items: center;
    text-align: ${props => props.textAlign};
  }
`;

export default ChildrenWrapper;