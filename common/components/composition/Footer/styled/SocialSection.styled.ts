import styled from 'styled-components';

import { MEDIA } from '@constants';

const SocialSection = styled.div`
  width: 170px;
  display: flex;
	justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0 auto;

  ${MEDIA.MD} {
    flex-wrap: nowrap;
    width: auto;
    justify-content: center;
  }

  ${MEDIA.LG} {
    flex-wrap: wrap;
    width: 170px;
    justify-content: space-between;
    margin: 0;
  }

  > span {
    cursor: pointer;

    &:hover {
      transition-property: opacity;
      transition-duration: 0.2s;
      transition-timing-function: ease-out;
      opacity: 0.5;
    }
  }
`;

export default SocialSection;