import styled from "styled-components";
import { getMedia, getResizeTransition } from "@utils";

const ImageWrapper = styled.div`
  max-width: 405px;
  margin: 0 auto;

  ${getResizeTransition("all")}

  ${getMedia("md")} {
    display: inline-block;
    margin-right: 0;
    width: 100%;
  }
`;

export default ImageWrapper;
