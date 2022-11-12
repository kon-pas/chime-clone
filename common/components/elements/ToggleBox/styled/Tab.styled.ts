import styled from "styled-components";

import { getMedia, getResizeTransition } from "@utils";

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  cursor: pointer;

  ${getResizeTransition("height")}

  ${getMedia("md")} {
    height: 6rem;
  }
`;

export default Tab;
