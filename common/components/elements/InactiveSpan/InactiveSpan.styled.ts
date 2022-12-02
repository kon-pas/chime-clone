import styled from "styled-components";

import { COLORS } from "@constants";

const InactiveSpan = styled.span`
  text-decoration: line-through;
  cursor: not-allowed;
  color: ${COLORS.BLACK} !important;
`;

export default InactiveSpan;
