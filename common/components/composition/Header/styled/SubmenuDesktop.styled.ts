import styled, { keyframes } from 'styled-components';

import { COLORS } from '@constants';

const SubmenuDesktop = styled.div`
  padding-top: .75rem;

  > menu {
    padding: 0.9rem;
    border-radius: 0.3rem;
    border-color: ${COLORS.FONT_GRAY_LIGHT};
    background-color: ${COLORS.WHITE};
    box-shadow: 0px 2px 24px -16px rgba(66, 68, 90, 1);
    display: grid;
    gap: 1.1rem;
    user-select: none;

    > li {
      color: ${COLORS.FONT_GRAY_MEDIUM};
      transition-property: color;
      transition-duration: 0.2s;
      font-size: 0.85rem;
      font-weight: 600;
      align-self: center;
      
      &:hover {
        color: ${COLORS.LIME_DARK};
      }
    }
  }
`;

export default SubmenuDesktop;