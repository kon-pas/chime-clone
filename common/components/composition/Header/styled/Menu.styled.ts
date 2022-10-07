import styled from 'styled-components';

import { COLORS } from '@constants';

interface MenuProps {
  isVisible: boolean;
}

const Menu = styled.div<MenuProps>`
  position: absolute;
  top: 0;
  min-height: 100vh;
  background-color: ${COLORS.WHITE};
  opacity: 0.98;
  width: 100%;
  user-select: none;
  left: ${props => props.isVisible ? '0' : '100%'};
  transition-property: left;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;

  > header {
    width: 100%;
    height: 60px;
    border-bottom: solid;
    border-bottom-width: 2px;
    border-bottom-color: ${COLORS.LIME_DARK};
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    background-color: ${COLORS.WHITE};

    > h1 {
      height: 100%;
      display: flex;
      align-items: center;
    }

    > svg {
      height: 50%;
      color: ${COLORS.LIME_DARK};
    }
  }

  > nav {
    padding: 62px 20px 70px 20px;
    position: relative;
    min-height: 100vh;
    height: 500px;
    overflow: auto;

    > menu {
      list-style-type: none;
      padding: 0;
  
      > li {
        margin: 25px 0;

        > a {
          font-weight: 700;
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

export default Menu;