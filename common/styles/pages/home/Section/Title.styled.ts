import styled from "styled-components";

import { getMedia } from "@utils";

import { resizeTransition } from "@utils";

const Heading = styled.h2`
  width: 100%;
  text-align: center;

  ${resizeTransition("font-size")}

  ${getMedia('md')} {
    font-size: 1.9rem;
  }

  ${getMedia('lg')} {
    font-size: 2.2rem;
  }
`;

export default Heading;