import styled from "styled-components";

import { ContentContainer } from "@components/elements";

import { getMedia } from "@utils";

const Container = styled(ContentContainer)`
  padding-top: 2rem;
  padding-bottom: 2rem;

  ${getMedia("md")} {
    
  }
`;

export default Container;
