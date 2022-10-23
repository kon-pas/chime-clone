import styled from "styled-components";

interface ModalProps {
  isVisible: boolean;
}

const Modal = styled.div<ModalProps>`
  display: ${props => props.isVisible ? "block" : "none"};
`;

export default Modal;