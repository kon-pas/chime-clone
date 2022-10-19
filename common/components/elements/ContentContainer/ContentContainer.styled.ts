import styled from "styled-components";

import { BREAKPOINTS } from "@constants";

import { getMedia } from "@utils";

const ContentContainer = styled.div`
  padding: 0 1.4rem;

  ${getMedia('md')} {
    width: ${BREAKPOINTS.MD}px;
    margin: 0 auto;
  }

  ${getMedia('lg')} {
    width: ${BREAKPOINTS.LG}px;
    padding: 0 2rem;
  }
`;

export default ContentContainer;
