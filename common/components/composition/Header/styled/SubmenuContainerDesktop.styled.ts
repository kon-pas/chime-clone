import styled, { keyframes } from 'styled-components';

import { COLORS } from '@constants';

interface SubmenuContainerDesktopProps {
  isVisible: boolean;
}

const SubmenuContainerDesktop = styled.div`
  padding-top: .75rem;
  z-index: 1;

  > menu {
    padding: 0.9rem;
    border-radius: 0.3rem;
    border-color: ${COLORS.FONT_GRAY_LIGHT};
    background-color: ${COLORS.WHITE};
    box-shadow: 0px 2px 24px -16px rgba(66, 68, 90, 1);
    display: grid;
    gap: 1.1rem;
    user-select: none;
  }
`;

export default SubmenuContainerDesktop;