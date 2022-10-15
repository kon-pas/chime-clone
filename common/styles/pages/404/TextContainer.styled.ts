import styled from "styled-components";

import { MEDIA } from "@constants";

const TextContainer = styled.div`
  display: grid;
  gap: 4rem;

  ${MEDIA.MD} {
    width: 320px;
    gap: 0;
    align-content: space-between;
    margin: 3rem 0;
  }

  ${MEDIA.LG} {
    width: 420px;
    margin: 4rem 0;
  }
`;

export default TextContainer;