import styled from 'styled-components';

import type { HexColor } from '@types';

interface WrapperProps {
  backgroundColor?: HexColor;
}

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  margin: 0 auto;
  background-color: ${props => props.backgroundColor};
`;

export default Wrapper;