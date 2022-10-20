import styled from "styled-components";

import { getMedia, getResizeTransition } from "@utils";

const TextContainer = styled.div`
  display: grid;
  gap: 4rem;

  ${getResizeTransition('width', 'margin', 'gap')}

  ${getMedia('md')} {
    width: 320px;
    gap: 0;
    align-content: space-between;
    margin: 3rem 0;
  }

  ${getMedia('lg')} {
    width: 420px;
    margin: 4rem 0;
  }
`;

export default TextContainer;