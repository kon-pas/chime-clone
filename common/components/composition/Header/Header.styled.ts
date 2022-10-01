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
  width: 100%;
  min-height: 100vh;
  background-color: ${COLORS.WHITE};
  opacity: 0.98;

  header {
    width: 100%;
    height: 55px;
    border-bottom: solid;
    border-bottom-width: 2px;
    border-bottom-color: ${COLORS.LIME_MAIN};
    padding: 0 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    background-color: ${COLORS.WHITE};
    z-index: 1;

    h1 {
      height: 100%;
      display: flex;
      align-items: center;
    }

    svg {
      height: 50%;
      color: ${COLORS.LIME_DARK};
    }
  }

  nav {
    margin: 0 20px;
    padding-top: 57px;
    padding-bottom: 70px; 
    position: relative;
    min-height: 100vh;

    > menu {
      list-style-type: none;
      padding: 0;
  
      > li {
        margin: 25px 0;

        > a {
          font-weight: 600;
          cursor: pointer;
          transition-property: color;
          transition-duration: 0.2s;

          &:hover {
            color: ${COLORS.LIME_DARK};
          }
        }
  
        > menu {
          list-style-type: none;
          padding: 0;
          margin: 25px 0;
  
          > li {
            margin: 12px 0;

            > a {
              font-size: 0.85rem;
              font-weight: 300;
              cursor: pointer;
              width: auto;
              transition-property: color;
              transition-duration: 0.2s;

              &:hover {
                color: ${COLORS.LIME_DARK};
              }
            }
          }
        }
      }
    }
  }
`;

export const AccountActions = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 70px;
  display: flex;
  gap: 2px;
  background-color: ${COLORS.WHITE};

  div {
    height: 100%;
    width: 100%;
    color: ${COLORS.WHITE};
    background-color: ${COLORS.LIME_MEDIUM};
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;