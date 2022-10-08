import styled from 'styled-components';

import { COLORS } from '@constants';

const Header = styled.header`
  > h1 {
   font-size: 2rem;
   line-height: 2.65rem;
   letter-spacing: 0.015em;
   color: ${COLORS.FONT_GRAY_DARK};
  }

  > p {
    line-height: 1.8rem;
    margin-top: 0.75rem;
    margin-bottom: 1.25rem;
  }
`;

export default Header;