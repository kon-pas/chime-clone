import styled from 'styled-components';

import { COLORS } from '@constants';

const Footer = styled.footer`
  background-color: ${COLORS.WHITE};
  padding: 4rem 1.2rem 1.5rem 1.2rem;

  hr {
    height: 1px;
    border: 0;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: ${COLORS.GRAY_MEDIUM};
    margin: 3rem 0;
    padding: 0;
  }
`;

export default Footer;