import styled from "styled-components";

import { getMedia, getResizeTransition } from "@utils";

const Heading = styled.h2`
  text-align: center;
  font-size: 2.1rem;
  line-height: 2.65rem;
  letter-spacing: 0.005em;

  ${getResizeTransition('font-size')}

  ${getMedia('lg')} {
    font-size: 2.25rem;
  }
`;

export default Heading;