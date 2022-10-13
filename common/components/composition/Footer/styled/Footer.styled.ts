import styled from "styled-components";

import { COLORS, MEDIA } from "@constants";

import { resizeTransition } from "@utils";

const Footer = styled.footer`
  background-color: ${COLORS.WHITE};
  padding: 4rem 0 1.5rem 0;
  width: 100%;
  margin: 0 auto;

  ${resizeTransition('padding')}
  
  ${MEDIA.MD} {
    padding: 4rem 0 5rem 0;
  }
`;

export default Footer;
