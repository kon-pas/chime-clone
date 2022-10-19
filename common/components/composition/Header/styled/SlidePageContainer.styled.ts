import styled from "styled-components";

import { COLORS, MEDIA } from "@constants";

interface SlidePageContainerProps {
  isVisible: boolean;
}

const SlidePageContainer = styled.div<SlidePageContainerProps>`
  position: absolute;
  top: 0;
  min-height: 100vh;
  background-color: ${COLORS.WHITE};
  opacity: 0.98;
  width: 100%;
  user-select: none;
  left: ${props => props.isVisible ? "0" : "100%"};
  transition: left 0.2s ease-in-out;

  > header {
    width: 100%;
    height: 60px;
    border-bottom: solid;
    border-bottom-width: 2px;
    border-bottom-color: ${COLORS.LIME_DARK};
    padding: 0 1.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: ${COLORS.WHITE};

    > h1 {
      height: 100%;

      > a {
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
      }
      
    }

    > svg {
      height: 50%;
      color: ${COLORS.LIME_DARK};
      cursor: pointer;
    }
  }

  ${MEDIA.MD} {
    display: none;
  }
`;

export default SlidePageContainer;
