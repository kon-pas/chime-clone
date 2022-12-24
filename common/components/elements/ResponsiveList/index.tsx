import * as Styled from "./styled";

import type { FC, ReactNode } from "react";

interface ResponsiveListProps {
  children: ReactNode;
}

const ResponsiveList: FC<ResponsiveListProps> = props => {
  return (
    // @@@ NOTE: Used `div` to break default children styling
    <div>
      <Styled.List bulletPosition="inside">
        {props.children}
      </Styled.List>
    </div>
  )
};

export default ResponsiveList;
