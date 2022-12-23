import * as Styled from "./styled";

import type { FC, ReactNode } from "react";

interface ResponsiveListProps {
  children: ReactNode;
}

const ResponsiveList: FC<ResponsiveListProps> = props => {

  

  return (
    <Styled.UnorderedList>
      {props.children}
    </Styled.UnorderedList>
  )
};

export default ResponsiveList;
