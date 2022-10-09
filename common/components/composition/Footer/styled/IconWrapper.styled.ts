import styled from "styled-components";

const IconWrapper = styled.div`
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;

  > a {
    display: inline-block;
    height: 32px;
  }

  &:hover {
    transition-property: opacity;
    transition-duration: 0.2s;
    transition-timing-function: ease-out;
    opacity: 0.5;
  }
`;

export default IconWrapper;
