import styled from "styled-components";

import { li } from "@styles/tags";

interface ListProps {
  readonly bulletPosition?: "inside" | "outside";
}

const List = styled.ul<ListProps>`
  display: grid;
  justify-items: start;
  width: 100%;
  gap: 1rem;
  
  > li {
    ${li};
  }

`;

export default List;
