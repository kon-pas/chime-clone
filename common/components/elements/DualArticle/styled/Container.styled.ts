import styled from 'styled-components';

import type { HexColor } from '@types';

import { MEDIA, COLORS } from '@constants';

import ContentContainer from '@components/elements/ContentContainer';

interface ContainerProps {
  imageFloat?: "left" | "right";
  backgroundColor?: HexColor;
}

const Container = styled(ContentContainer)<ContainerProps>`
  background-color: ${props => props.backgroundColor ?? COLORS.WHITE};
  padding-top: 3rem;
  padding-bottom: 3rem;

  ${MEDIA.MD} {
    display: flex;
    flex-direction: ${props => props.imageFloat === "left" ? "row-reverse" : "row"};
    gap: 4rem;
    padding-top: 7rem;
    padding-bottom: 7rem;
  }
`;

export default Container;