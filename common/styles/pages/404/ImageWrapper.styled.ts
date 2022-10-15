import styled from "styled-components";

import { MEDIA } from "@constants";

const ImageWrapper = styled.div`
  max-width: 405px;
  margin: 0 auto;

  ${MEDIA.MD} {
    display: inline-block;
    margin-right: 0;
    width: 100%;
  }
`;

export default ImageWrapper;