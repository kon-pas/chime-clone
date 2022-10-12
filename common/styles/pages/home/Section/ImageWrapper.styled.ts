import styled from "styled-components";

import { MEDIA } from "@constants";

const ImageWrapper = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;

  ${MEDIA.MD} {
    margin-bottom: 0;

    img {
      width: 170px;
    }
  }
`;

export default ImageWrapper;
