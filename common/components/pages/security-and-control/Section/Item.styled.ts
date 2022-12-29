import styled from "styled-components";
import { p, h3 } from "@styles/tags";
import { getMedia, getResizeTransition } from "@utils";

const Item = styled.div`
  text-align: center;
  margin: 2rem 0;

  ${getResizeTransition("max-width")}

  ${getMedia("md")} {
    max-width: 250px;
  }

  ${getMedia("lg")} {
    max-width: 325px;
  }

  > h3 {
    ${h3}
    margin: 1.25rem 0;
  }

  > p {
    ${p}
  }
`;

export default Item;
