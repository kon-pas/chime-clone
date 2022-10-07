import styled from "styled-components";

import { MEDIA, BREAKPOINTS } from "@constants";

const ContentContainer = styled.div`

  ${ MEDIA.MD } {
    width: ${BREAKPOINTS.MD}px;
    margin: 0 auto;
  }

  ${ MEDIA.LG } {
    width: ${BREAKPOINTS.LG}px;
  }
`;

export default ContentContainer;