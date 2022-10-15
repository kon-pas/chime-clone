import styled from "styled-components";

import { MEDIA } from "@constants";

import ContentContainer from "@components/elements/ContentContainer/ContentContainer.styled";

const Container = styled(ContentContainer)`
  ${MEDIA.MD} {
    display: flex;
  }
`;

export default Container;