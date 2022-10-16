import styled from "styled-components";

import { MEDIA } from "@constants"

const ChildrenWrapper = styled.div`
  display: grid;
  gap: 2rem;

  p {
    line-height: 1.75rem;
  }
  
  h1 {
    ${MEDIA.LG} {
      font-size: 2.25rem;
    }
  }
  
  ${MEDIA.MD} {
    width: 500px;
    margin: 0 auto;
    justify-items: center;
    text-align: center;
  }
`;

export default ChildrenWrapper;