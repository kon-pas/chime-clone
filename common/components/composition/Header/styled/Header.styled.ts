import styled from 'styled-components';

import { COLORS, MEDIA } from '@constants';

const Header = styled.header`
  width: 100%;
  background-color: white;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  justify-content: space-between;

  ${MEDIA.MD} {
    padding: 0 7rem;
    height: 70px;
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