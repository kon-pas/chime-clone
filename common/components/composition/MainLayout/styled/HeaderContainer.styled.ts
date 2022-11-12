import styled from "styled-components";

import { COLORS, Z_INDEX } from "@constants";

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: ${COLORS.WHITE};
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  z-index: ${Z_INDEX.HEADER};
`;

export default HeaderContainer;
