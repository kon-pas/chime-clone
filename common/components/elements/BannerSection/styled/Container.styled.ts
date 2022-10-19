import styled from "styled-components";

import { MEDIA } from "@constants";

import ContentContainer from "@components/elements/ContentContainer";

const Container = styled(ContentContainer)`
  ${MEDIA.MD} {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }

  ${MEDIA.LG} {
  }
`;

export default Container;