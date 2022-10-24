import * as Styled from "./styled";

interface ModalProps {
  children: React.ReactNode;
}

const ModalLayout: React.FC<ModalProps> = props => {
  return (
    <Styled.Container>
      {props.children}
    </Styled.Container>
  );
}

export default ModalLayout;