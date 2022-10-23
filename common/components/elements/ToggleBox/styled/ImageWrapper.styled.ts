import styled from "styled-components";

interface ImageWrapperProps {
  isOpened: boolean;
}

const ImageWrapper = styled.div<ImageWrapperProps>`
  height: 30%;
  aspect-ratio: 1 / 1;
  transform: ${props => props.isOpened ? 'rotate(-180deg)' : 'rotate(0deg)'};
  transition: transform 0.2s linear;
`;

export default ImageWrapper;