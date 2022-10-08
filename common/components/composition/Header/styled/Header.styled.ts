import styled from 'styled-components';

import { COLORS, MEDIA, BREAKPOINTS } from '@constants';

const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-between;
  justify-self: center;

  ${MEDIA.MD} {
    height: 70px;
    width: ${BREAKPOINTS.MD}px;
    margin: 0 auto;
    padding: 0 1.4rem;
  }

  ${MEDIA.LG} {
    width: ${BREAKPOINTS.LG}px;
    padding: 0 2rem;
  }

  > h1 {
    line-height: 1rem;
  }

  > nav:nth-of-type(2) {
    display: grid;
    justify-items: end;
    align-content: center;
    grid-template-columns: 1fr 0.4fr;
    height: 55%;

    > svg {
      height: 80%;
      margin: auto 0;
      color: ${COLORS.LIME_DARK};

      ${MEDIA.MD} {
        display: none;
      }
    }
  }
`;

export default Header;