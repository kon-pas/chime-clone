import styled from "styled-components";

import { MEDIA } from "@constants";

interface ImageWrapper {
  align?: "center" | "bottom";
  sm?: number;
  md?: number;
  lg?: number;
}

const ImageWrapper = styled.div<ImageWrapper>`
  margin-top: 3rem;
  max-width: ${props => props.sm ?? "100%"};

  ${MEDIA.MD} {
    width: 50%;
    display: grid;
    margin-top: 0;
    align-content: ${props => props.align === "bottom" ? "flex-end" : "center"};
    max-width: ${props => props.md ?? "50%"};
  }

  ${MEDIA.LG} {
    max-width: ${props => props.lg ?? "50%"};
  }
`;

export default ImageWrapper;
