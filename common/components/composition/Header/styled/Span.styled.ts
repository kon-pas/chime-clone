import styled from 'styled-components';

import { COLORS } from '@constants';

const Span = styled.span`
  color: ${COLORS.FONT_GRAY_MEDIUM};
  transition-property: color;
  transition-duration: 0.2s;
  font-size: 0.85rem;
  font-weight: 600;
  align-self: center;

  &:hover {
    color: ${COLORS.LIME_DARK};
  }
`;

export default Span;