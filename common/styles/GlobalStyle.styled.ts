import { createGlobalStyle } from "styled-components";

import { COLORS } from "@constants";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Inter';
    margin: 0;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  #__next {
    color: ${COLORS.FONT_GRAY_MEDIUM};
  }

  html,
  body {
    padding: 0;
    contain: paint;
  }

  body {
    min-width: 250px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  strong {
    font-weight: inherit;
  }

  ul, menu, li {
    padding: 0;
    list-style: none;
  }
`;

export default GlobalStyle;