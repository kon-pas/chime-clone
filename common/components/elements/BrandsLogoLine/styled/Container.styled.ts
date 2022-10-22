import styled from "styled-components";

import { getMedia, getResizeTransition } from "@utils";

import ContentContainer from "@components/elements/ContentContainer";

const Container = styled(ContentContainer)`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;

  ${getResizeTransition('width')}

  ${getMedia('md')} {
    justify-content: space-between;
  }
`;

export default Container;