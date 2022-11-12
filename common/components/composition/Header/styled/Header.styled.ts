import styled from "styled-components";

import { COLORS, BREAKPOINTS } from "@constants";

import { getMedia } from "@utils";

import { getResizeTransition } from "@utils";

const Header = styled.header`
  width: 100%;
  height: 60px;
  padding: 0 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-self: center;

  ${getResizeTransition("all")}

  > h1 {
    line-height: 1rem;
    cursor: pointer;
  }

  > nav:nth-of-type(2) {
    display: flex;
    gap: 10px;

    > svg {
      width: 30px;
      color: ${COLORS.LIME_DARK};
      cursor: pointer;

      ${getMedia("md")} {
        display: none;
      }
    }
  }

  ${getMedia("md")} {
    height: 65px;
    width: ${BREAKPOINTS.MD}px;
    margin: 0 auto;

    > h1 {
      line-height: normal;
    }
  }

  ${getMedia("lg")} {
    width: ${BREAKPOINTS.LG}px;
    padding: 0 2rem;
  }
`;

export default Header;
