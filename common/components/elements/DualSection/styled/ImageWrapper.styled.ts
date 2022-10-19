import styled from "styled-components";

import { getMedia } from "@utils";

import { resizeTransition } from "@utils";

interface ImageWrapperProps {
  sm?: number;
  md?: number;
  lg?: number;
}

const ImageWrapper = styled.div<ImageWrapperProps>`
  margin: 1.25rem auto 0 auto;
  width: 100%;
  max-width: ${props => `${props.sm}px` ?? '440px'};

  ${resizeTransition("all")}

  ${getMedia('md')} {
    max-width: ${props => `${props.md}px` ?? '365px'};
    margin: auto 0;
  }

  ${getMedia('lg')} {
    max-width: ${props => `${props.lg}px` ?? '420px'};
    margin: auto;
  }
`;

export default ImageWrapper;
