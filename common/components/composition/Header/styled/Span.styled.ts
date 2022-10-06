import styled from 'styled-components';

import { COLORS, MEDIA } from '@constants';

const Span = styled.span`
  color: ${COLORS.FONT_GRAY_MEDIUM};
  transition-property: color;
  transition-duration: 0.2s;
  font-size: 0.85rem;
  font-weight: 600;
  align-self: center;
  display: none;

  ${MEDIA.MD} {
    display: inline-block;
  }

  &:hover {
    color: ${COLORS.LIME_DARK};
  }
`;

export default Span;