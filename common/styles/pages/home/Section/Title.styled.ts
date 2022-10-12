import styled from "styled-components";

import { MEDIA } from "@constants";

import { resizeTransition } from "@utils";

const Heading = styled.h2`
  width: 100%;
  text-align: center;

  ${resizeTransition("font-size")}

  ${MEDIA.MD} {
    font-size: 1.9rem;
  }

  ${MEDIA.LG} {
    font-size: 2.2rem;
  }
`;

export default Heading;