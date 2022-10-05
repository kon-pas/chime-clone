import styled, { keyframes } from 'styled-components';

import { COLORS } from '@constants';

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 100;
  }
`;

const MenuDesktop = styled.nav`
  margin-right: auto;
  margin-left: 2rem;

  > menu {
    display: flex;
    gap: 0.75rem;

    > li {
      display: inline-block;
      white-space: nowrap;
      font-size: 0.95rem;
      font-weight: 700;
      position: relative;
      user-select: none;

      > span {
        transition-property: color;
        transition-duration: 0.2s;
  
        &:hover {
          color: ${COLORS.LIME_DARK};
        }
      }

      &:hover > div {
        display: block;
      }

      > div {
        display: none;
        position: absolute;
        animation-name: ${appear};
        animation-duration: 0.1s;
        animation-timing-function: linear;

      }
    }
  }
`;

export default MenuDesktop;