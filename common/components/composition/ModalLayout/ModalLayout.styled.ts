import styled from "styled-components";

import { BREAKPOINTS } from "@constants";

interface ContainerProps {
  width: number;
}

export const Container = styled.div<ContainerProps>`
  width: ${props => `${props.width}vw`};
  min-width: 280px;
  max-width: ${BREAKPOINTS.MD}px;
  margin: 2rem auto 0 auto;
`;
