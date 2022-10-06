import styled from 'styled-components';

import { COLORS } from '@constants';

import { Button as DefaultButton } from '@components/elements/Button/Button.styled';

const Button = styled(DefaultButton)`
  background-color: ${COLORS.LIME_MEDIUM};
  border: none;
  padding: 0.5rem 1.05rem;
  margin-left: 0.5rem;
  font-size: 0.95rem;
  font-weight: 600;
`;

export default Button;