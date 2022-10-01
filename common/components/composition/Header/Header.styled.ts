import styled from 'styled-components';

import { Button as DefaultButton } from '@components/elements/Button/Button.styled';

import { COLORS } from '@constants';

export const Header = styled.header`
  width: 100%;
  background-color: white;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);

  h1 {
    line-height: 1rem;
  }

  nav {
    display: grid;
    justify-items: end;
    grid-template-columns: 1fr 0.4fr;
    height: 55%;

    svg {
      height: 80%;
      margin: auto 0;
      color: ${COLORS.LIME_DARK};
    }
  }
`;

export const Button = styled(DefaultButton)`
  background-color: ${COLORS.LIME_MEDIUM};
  border: none;
  padding: 0.5rem 1.05rem;
  font-size: 0.95rem;
  font-weight: 600;
`;

export const NavigationMenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.WHITE};
  opacity: 0.98;

  header {
    width: 100%;
    height: 55px;
    border-bottom: solid;
    border-bottom-width: 2px;
    border-bottom-color: ${COLORS.LIME_MAIN};

    h1 {

    }
  }
`;