import * as Styled from "./ModalLayout.styled";

import type { FC, ReactNode } from "react";

interface ModalLayoutrops {
  children: ReactNode;
  width?: number;
}

const ModalLayout: FC<ModalLayoutrops> = props => {
  console.log(props.width);

  return (
    <Styled.Container width={props.width ?? 35}>
      {props.children}
    </Styled.Container>
  );
}

export default ModalLayout;