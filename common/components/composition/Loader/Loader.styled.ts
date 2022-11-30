import styled, { keyframes } from "styled-components";

import { COLORS, Z_INDEX } from "@constants";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoaderWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${COLORS.WHITE};

  z-index: ${Z_INDEX.LOADER};
`;

export const AnimationWrapper = styled.div`
  svg {
    width: 2rem;
    height: 2rem;

    animation: ${spin} 2s linear infinite;
  }
`;
