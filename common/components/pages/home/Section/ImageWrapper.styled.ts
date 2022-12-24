import styled from "styled-components";
import { getMedia, getResizeTransition } from "@utils";

const ImageWrapper = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;

  ${getResizeTransition('margin-bottom', 'width')}

  ${getMedia('md')} {
    margin-bottom: 0;
    align-items: center;

    img {
      width: 170px;
    }
  }
`;

export default ImageWrapper;
