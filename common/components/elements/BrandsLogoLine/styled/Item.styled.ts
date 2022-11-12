import styled from "styled-components";

import { getMedia, getResizeTransition } from "@utils";

interface ItemProps {
  width: number;
}

const Item = styled.div<ItemProps>`
  width: ${props => `${props.width / 2}px`};

  ${getResizeTransition("width")}

  ${getMedia("md")} {
    width: ${props => `${props.width / 1.5}px`};
  }
`;

export default Item;
