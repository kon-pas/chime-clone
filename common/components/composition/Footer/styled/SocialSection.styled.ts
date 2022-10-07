import styled from 'styled-components';

import { MEDIA } from '@constants';

const SocialSection = styled.div`
  width: 170px;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
	justify-content: space-between;
  align-content: space-between;
  margin: 0 auto;

  ${MEDIA.MD} {
    width: auto;
    height: 40px;
    gap: 1rem;
    justify-content: center;
  }

  ${MEDIA.LG} {
    width: 170px;
    height: 150px;
    justify-content: space-between;
  }

  > a {
    height: 40px;
  }

  > div {
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;

    > a {
      display: inline-block;
      height: 32px;
    }

    &:hover {
      transition-property: opacity;
      transition-duration: 0.2s;
      transition-timing-function: ease-out;
      opacity: 0.5;
    }
  }
`;

export default SocialSection;