import styled from "styled-components";

import { COLORS } from "@constants";

const AccountActions = styled.div`
  width: 100vw;
  height: 70px;
  background-color: ${COLORS.WHITE};
  position: sticky;
  bottom: 0;
  display: flex;
  gap: 2px;

  div {
    width: 100%;
    height: 100%;
    color: ${COLORS.WHITE};
    background-color: ${COLORS.LIME_MEDIUM};
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export default AccountActions;
