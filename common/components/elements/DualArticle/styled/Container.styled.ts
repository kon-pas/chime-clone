import styled from 'styled-components';

import { MEDIA } from '@constants';

import ContentContainer from '@components/elements/ContentContainer';

interface ContainerProps {
  imageFloat?: "left" | "right";
}

const Container = styled(ContentContainer)<ContainerProps>`
  ${MEDIA.MD} {
    display: flex;
    flex-direction: ${props => props.imageFloat === "left" ? "row-reverse" : "row"};
    gap: 4rem;
  }
`;

export default Container;