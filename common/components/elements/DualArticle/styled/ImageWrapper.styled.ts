import styled from 'styled-components';

import { MEDIA } from '@constants';

const ImageWrapper = styled.div`
  margin: 1.25rem auto 0 auto;
  max-width: 450px;
  transition: all 0.5s ease-out;

  ${MEDIA.MD} {
    width: 100%;
    margin: 0;
  }

  ${MEDIA.LG} {
    margin: 0 4rem;
  }
`;

export default ImageWrapper;