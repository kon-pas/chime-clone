import styled from 'styled-components';

import { MEDIA } from '@constants';

import ContentContainer from '@components/elements/ContentContainer';

interface ContainerProps {
  imageFloat?: "left" | "right";
}

const Container = styled(ContentContainer)<ContainerProps>`
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