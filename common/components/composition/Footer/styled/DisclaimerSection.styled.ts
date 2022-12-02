import styled from "styled-components";

import { COLORS } from "@constants";

const DisclaimerSection = styled.div`
  > p {
    color: ${COLORS.FONT_GRAY_LIGHT};
    font-size: 0.75rem;
    line-height: 1.1rem;

    > sup {
      font-size: 0.5rem;
    }
  }
`;

export default DisclaimerSection;
