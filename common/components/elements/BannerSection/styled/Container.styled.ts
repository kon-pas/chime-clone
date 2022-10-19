import styled from "styled-components";

import { MEDIA } from "@constants";

import ContentContainer from "@components/elements/ContentContainer";

const Container = styled(ContentContainer)`
  position: relative;

  ${MEDIA.MD} {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;
  }
`;

export default Container;