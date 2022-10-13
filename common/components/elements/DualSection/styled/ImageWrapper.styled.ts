import styled from "styled-components";

import { MEDIA } from "@constants";

import { resizeTransition } from "@utils";

interface ImageWrapperProps {
  sm?: number;
  md?: number;
  lg?: number;
}

const ImageWrapper = styled.div<ImageWrapperProps>`
  margin: 1.25rem auto 0 auto;
  width: 100%;
  max-width: ${props => props.sm ?? '440px'};

  ${resizeTransition("all")}

  ${MEDIA.MD} {
    max-width: ${props => props.md ?? '365px'};
    margin: auto 0;
  }

  ${MEDIA.LG} {
    max-width: ${props => props.lg ?? '365px'};
    margin: auto;
  }
`;

export default ImageWrapper;