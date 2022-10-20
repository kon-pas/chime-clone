import styled from "styled-components";

import { getMedia, getResizeTransition } from "@utils";

const ChildrenWrapper = styled.div`
  display: grid;
  gap: 2rem;

  p {
    line-height: 1.75rem;
  }
  
  h1 {
    ${getResizeTransition('font-size')}

    ${getMedia('lg')} {
      font-size: 2.25rem;
    }
  }

  ${getResizeTransition('width', 'margin')}
  
  ${getMedia('md')} {
    width: 500px;
    margin: 0 auto;
    justify-items: center;
    text-align: center;
  }
`;

export default ChildrenWrapper;