import styled from 'styled-components';

import { Button as DefaultButton } from '@components/elements/Button/Button.styled';

import { COLORS } from '@constants';

export const Header = styled.header`
  width: 100%;
  background-color: white;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const BrandLogo = styled.div`

`;

export const Navigation = styled.nav`
  display: flex;
`;

export const Button = styled(DefaultButton)`
  background-color: ${COLORS.LIME_MEDIUM};
  border: none;
`;