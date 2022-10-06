import { createGlobalStyle } from "styled-components";

import { COLORS } from "@constants";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Inter';
  }
  
  #__next {
    color: ${COLORS.FONT_GRAY_MEDIUM};
  }

  html,
  body {
    padding: 0;
    margin: 0;
    contain: paint;

    /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */
  }

  body {
    min-width: 250px;
    background-color: grey; // temp
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  strong {
    font-weight: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  ul, menu, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export default GlobalStyle;