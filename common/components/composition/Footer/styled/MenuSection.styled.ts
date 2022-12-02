import styled from "styled-components";

import { COLORS } from "@constants";

import { getMedia, getResizeTransition } from "@utils";

const MenuSection = styled.menu`
  display: grid;
  gap: 2rem;
  width: fit-content;

  ${getResizeTransition("width")}

  ${getMedia("md")} {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  > li {
    > span {
      white-space: nowrap;
      font-size: 1rem;
      font-weight: 700;

      transition-property: color;
      transition-duration: 0.2s;

      &:hover {
        color: ${COLORS.LIME_DARK};
      }
    }

    > menu {
      display: grid;
      grid-gap: 0.9rem;
      margin-top: 0.9rem;

      > li {
        white-space: nowrap;
        font-weight: 300;
        font-size: 0.85rem;
        user-select: none;
        cursor: pointer;

        transition-property: color;
        transition-duration: 0.2s;

        &:hover {
          color: ${COLORS.LIME_DARK};
        }
      }
    }
  }
`;

export default MenuSection;
