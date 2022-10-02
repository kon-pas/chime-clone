import styled from 'styled-components';

import { COLORS } from '@constants';

export const Header = styled.header`
  width: 100%;
  background-color: white;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);

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
    }
  }
`;

export { default as Button } from './Button.styled';

export { default as MenuContainer } from './MenuContainer.styled';

export { default as AccountActions } from './AccountActions.styled';

export { default as MenuContainerDesktop } from './MenuContainerDesktop.styled';

export { default as SubmenuContainerDesktop } from './SubmenuContainerDesktop.styled';