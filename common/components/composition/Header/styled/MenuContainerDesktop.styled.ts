import styled, { keyframes } from 'styled-components';

import { COLORS, MEDIA } from '@constants';

const appear = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
  }

  1% {
    visibility: visible;
    opacity: 0;
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
`;

const disappear = keyframes`
  0% {
    visibility: visible;
    opacity: 1;
  }

  99% {
    visibility: visible;
    opacity: 0;
  }

  100% {
    visibility: hidden;
    opacity: 0;
  }
`;

const MenuContainerDesktop = styled.nav`
  margin-right: auto;
  margin-left: 2rem;
  display: none;

  ${MEDIA.MD} {
    display: inline-block;
  }

  > menu {
    display: flex;
    gap: 0.75rem;

    ${MEDIA.LG} {
      gap: 1.6rem;
    }

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

      > div {
        position: absolute;
        animation: ${disappear} 0.2s ease-out;
        visibility: hidden;
      }

      &:hover > div {
        animation: ${appear} 0.2s ease-out;
        visibility: visible;
      }
    }
  }
`;

export default MenuContainerDesktop;