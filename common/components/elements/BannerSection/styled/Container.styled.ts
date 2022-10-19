import styled from "styled-components";

import { getMedia } from "@utils";

import ContentContainer from "@components/elements/ContentContainer";

const Container = styled(ContentContainer)`
  position: relative;

  ${getMedia('md')} {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;
  }
`;

export default Container;