import * as Styled from "./ModalLayout.styled";

import type { FC, ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
}

const ModalLayout: FC<ModalProps> = props => {
  return (
    <Styled.Container>
      {props.children}
    </Styled.Container>
  );
}

export default ModalLayout;