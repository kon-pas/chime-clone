import styled from "styled-components";

import { ContentContainer } from "@components/elements";

import { getMedia, getResizeTransition } from "@utils";

const Container = styled(ContentContainer)`
  margin-top: 0.75rem;

  ${getResizeTransition("margin-top")}

  ${getMedia("md")} {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
`;

export default Container;
