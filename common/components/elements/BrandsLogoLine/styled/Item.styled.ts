import styled from "styled-components";
import { getMedia, getResizeTransition } from "@utils";

interface ItemProps {
  width: number;
}

const Item = styled.div<ItemProps>`
  width: ${props => `${Math.ceil(props.width / 2)}px`};

  ${getResizeTransition("width")}

  ${getMedia("md")} {
    width: ${props => `${Math.ceil(props.width / 1.5)}px`};
  }

  ${getMedia("lg")} {
    width: ${props => `${Math.ceil(props.width / 1.25)}px`};
  }
`;

export default Item;
