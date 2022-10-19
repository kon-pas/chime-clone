import styled from "styled-components";

import { MEDIA, BREAKPOINTS } from "@constants";

const ImageWrapper = styled.div`
  margin: 3rem auto 0 auto;

  ${MEDIA.MD} {
    width: 50%;
  }
`;

export default ImageWrapper;