import styled from "styled-components";

import { MEDIA } from "@constants";

import { resizeTransition } from "@utils";

const ImageWrapper = styled.div`
  margin: 1.25rem auto 0 auto;
  max-width: 440px;

  ${resizeTransition("all")}

  ${MEDIA.MD} {
    width: 365px;
    margin: auto 0;
  }

  ${MEDIA.LG} {
    margin: auto;
    width: 100%;
  }
`;

export default ImageWrapper;
