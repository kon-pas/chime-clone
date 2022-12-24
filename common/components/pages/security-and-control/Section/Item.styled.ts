import styled from "styled-components";
import { p, h3 } from "@styles/Tags.styled";
import { getMedia } from "@utils";

const Item = styled.div`
  text-align: center;
  margin: 2rem 0;

  ${getMedia("md")} {
    max-width: 400px;
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
