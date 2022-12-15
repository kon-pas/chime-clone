import styled from "styled-components";

import { getMedia } from "@utils";

interface SideImageProps {
  align?: "center" | "bottom";
  sm?: number;
  md?: number;
  lg?: number;
}

const SideImage = styled.div<SideImageProps>`
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => `${props.sm}px` ?? "100%"};

  ${getMedia("md")} {
    width: 50%;
    display: grid;
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
    align-content: ${props =>
      props.align === "bottom" ? "flex-end" : "center"};
    max-width: ${props => `${props.md}px` ?? "50%"};
  }

  ${getMedia("lg")} {
    max-width: ${props => `${props.lg}px` ?? "50%"};
  }
`;

export default SideImage;
