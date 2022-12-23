import styled from "styled-components";
import { COLORS } from "@constants";

const MenuContainer = styled.nav`
  padding: 0 1.4rem 70px 1.4rem;
  position: relative;
  height: calc(100vh - 60px);
  overflow: auto;

  > menu {
    list-style-type: none;
    padding: 0;

    > li {
      margin: 25px 0;

      > span {
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

          > span {
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
`;

export default MenuContainer;
