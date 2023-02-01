import styled from "styled-components";

import { COLORS } from "@constants";

interface InactiveSpanProps {
  width?: number;
}

const InactiveSpan = styled.span<InactiveSpanProps>`
  text-decoration: line-through ${props => props.width ?? 1}px;
  cursor: not-allowed;
  color: ${COLORS.GRAY_MEDIUM} !important;
`;

export default InactiveSpan;
