import styled from "styled-components";

import { getMedia } from "@utils";

import ContentContainer from "@components/elements/ContentContainer/ContentContainer.styled";

const Container = styled(ContentContainer)`
  ${getMedia('md')} {
    display: flex;
  }
`;

export default Container;