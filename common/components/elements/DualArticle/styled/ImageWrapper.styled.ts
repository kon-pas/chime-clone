import styled from 'styled-components';

import { MEDIA } from '@constants';

const ImageWrapper = styled.div`
  margin-top: 1.25rem;

  ${MEDIA.MD} {
    width: 110%;
  }

  ${MEDIA.LG} {
    margin: 0 4rem;
  }
`;

export default ImageWrapper;