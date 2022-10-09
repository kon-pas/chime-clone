import styled from "styled-components";

import { COLORS } from "@constants";

interface HorizontalLineProps {
  hideAt?: number;
}

const HorizontalLine = styled.hr<HorizontalLineProps>`
  height: 1px;
  border: 0;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${COLORS.GRAY_MEDIUM};
  margin: 3rem 0;
  padding: 0;

  @media (min-width: ${props => props.hideAt}px) {
    display: none;
  }
`;

export default HorizontalLine;
