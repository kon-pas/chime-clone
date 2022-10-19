import styled from "styled-components";

import { getMedia } from "@utils";

const TopSection = styled.div`
  ${getMedia('lg')} {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 5rem;
    margin: 0 auto;
  }
`;

export default TopSection;
