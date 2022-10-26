import styled from "styled-components";

import { COLORS } from "@constants";

const Error = styled.div`
  margin-bottom: 0.75rem;
  background-color: ${COLORS.BG_WARN};
  color: ${COLORS.FONT_WARN};
  font-size: 0.9rem;
  padding: 0.5rem 0;
`;

export default Error;