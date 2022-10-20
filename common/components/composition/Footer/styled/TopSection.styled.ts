import styled from "styled-components";

import { getMedia, getResizeTransition } from "@utils";

const TopSection = styled.div`
  ${getResizeTransition('all')}

  ${getMedia('lg')} {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 5rem;
    margin: 0 auto;
  }
`;

export default TopSection;
