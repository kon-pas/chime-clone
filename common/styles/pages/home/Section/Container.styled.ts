import styled from "styled-components";

import ContentContainer from "@components/elements/ContentContainer";

import { MEDIA } from "@constants";

const Container = styled(ContentContainer)`
  margin-top: 0.75rem;

  ${MEDIA.MD} {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
`;

export default Container;