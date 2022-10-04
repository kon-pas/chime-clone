import styled from 'styled-components';

import { COLORS } from '@constants';

const AccountActions = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 70px;
  display: flex;
  gap: 2px;
  background-color: ${COLORS.WHITE};

  div {
    height: 100%;
    width: 100%;
    color: ${COLORS.WHITE};
    background-color: ${COLORS.LIME_MEDIUM};
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default AccountActions;