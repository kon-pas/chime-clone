import styled from "styled-components";
import { COLORS } from "@constants";
import { getMedia } from "@utils";

interface ModalContainerProps {
  isVisible: boolean;
}

const ModalContainer = styled.div<ModalContainerProps>`
  position: absolute;
  top: 0;
  min-height: 100vh;
  background-color: ${COLORS.WHITE};
  width: 100%;
  user-select: none;
  left: ${props => (props.isVisible ? "0" : "100%")};
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

    h1 {
      height: 50%;
      cursor: pointer;
    }

    > svg {
      height: 50%;
      color: ${COLORS.LIME_DARK};
      cursor: pointer;
    }
  }

  ${getMedia("md")} {
    display: none;
  }
`;

export default ModalContainer;
