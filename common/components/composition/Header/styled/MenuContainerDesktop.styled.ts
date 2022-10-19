import styled, { keyframes } from "styled-components";

import { COLORS } from "@constants";

import { getMedia } from "@utils";

import { resizeTransition } from "@utils";

const appear = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
  }

  1% {
    visibility: visible;
  }

  100% {
    opacity: 1;
  }
`;

const disappear = keyframes`
  0% {
    visibility: visible;
    opacity: 1;
  }

  99% {
    opacity: 0;
  }

  100% {
    visibility: hidden;
  }
`;

const MenuContainerDesktop = styled.nav`
  margin-right: auto;
  margin-left: 2rem;
  display: none;

  ${getMedia('md')} {
    display: inline-block;
  }

  > menu {
    display: flex;
    gap: 0.75rem;

    ${resizeTransition("gap")}

    ${getMedia('lg')} {
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
        transition: color 0.2s ease-out;

        &:hover {
          color: ${COLORS.LIME_DARK};
        }
      }

      > div {
        position: absolute;
        visibility: hidden;

        @media (prefers-reduced-motion) {
          animation: ${disappear} 0.2s ease-out;
        }
      }

      &:hover > div {
        animation: ${appear} 0.2s ease-out;
        visibility: visible;
      }
    }
  }
`;

export default MenuContainerDesktop;
