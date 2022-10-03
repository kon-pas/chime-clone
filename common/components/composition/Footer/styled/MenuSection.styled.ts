import styled from 'styled-components';

import { COLORS } from '@constants';

const MenuSection = styled.menu`
  display: grid;
  gap: 2rem;

  > li {
    display: grid;
    grid-gap: 0.9rem;

    > span {
      white-space: nowrap;
      font-size: 1rem;
      font-weight: 700;
    }

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

`;

export default MenuSection;