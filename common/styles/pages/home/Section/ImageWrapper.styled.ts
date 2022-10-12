import styled from "styled-components";

import { MEDIA } from "@constants";

import { resizeTransition } from "@utils";

const ImageWrapper = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;

  ${resizeTransition("margin-bottom")}

  ${MEDIA.MD} {
    margin-bottom: 0;
    align-items: center;

    img {
      width: 170px;
    }
  }
`;

export default ImageWrapper;
