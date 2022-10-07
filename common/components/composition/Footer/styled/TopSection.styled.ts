import styled from 'styled-components';

import { MEDIA } from '@constants';

const TopSection = styled.div`
  ${ MEDIA.LG } {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 1rem;
    margin: 0 auto;
  }
`;

export default TopSection;