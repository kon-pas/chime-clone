import styled, { keyframes } from "styled-components";

const show = keyframes`
  from {
    visibility: hidden;
    opacity: 0;
    max-height: 0vh;
  }

  to {
    visibility: none;
    opacity: 1;
    max-height: 100vh;
  }
`;

interface ModalProps {
  isOpened: boolean;
}

const Modal = styled.div<ModalProps>`
  animation: ${show} 0.5s ease-out;
  padding-bottom: 1.5rem;
`;

export default Modal;