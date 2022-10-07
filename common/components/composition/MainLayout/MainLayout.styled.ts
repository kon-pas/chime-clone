import styled from 'styled-components';

import { COLORS, Z_INDEX } from '@constants';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: ${COLORS.WHITE};
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  z-index: ${Z_INDEX.HEADER};
`;

export const FooterContainer = styled.div`
  margin-top: auto;
  min-height: 50px;
`;