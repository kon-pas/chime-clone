import styled from "styled-components";

import { MEDIA, BREAKPOINTS } from "@constants";

const ContentContainer = styled.div`
  padding: 0 1.4rem;

  ${ MEDIA.MD } {
    width: ${BREAKPOINTS.MD}px;
    margin: 0 auto;
  }

  ${ MEDIA.LG } {
    width: ${BREAKPOINTS.LG}px;
    padding: 0 2rem;
  }
`;

export default ContentContainer;