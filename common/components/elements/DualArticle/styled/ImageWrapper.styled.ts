import styled from "styled-components";

import { MEDIA } from "@constants";

const ImageWrapper = styled.div`
  margin: 1.25rem auto 0 auto;
  max-width: 400px;
  transition: all 0.5s ease-out;

  ${MEDIA.MD} {
    width: 100%;
    margin: auto 0 auto 0;
  }
`;

export default ImageWrapper;
