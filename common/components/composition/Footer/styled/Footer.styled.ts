import styled from "styled-components";

import { COLORS } from "@constants";

import { getMedia } from "@utils";

import { resizeTransition } from "@utils";

const Footer = styled.footer`
  background-color: ${COLORS.WHITE};
  padding: 4rem 0 1.5rem 0;
  width: 100%;
  margin: 0 auto;

  ${resizeTransition('padding')}
  
  ${getMedia('md')} {
    padding: 4rem 0 5rem 0;
  }
`;

export default Footer;
